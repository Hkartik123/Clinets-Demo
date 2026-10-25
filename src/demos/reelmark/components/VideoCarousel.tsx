import { useCallback, useEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import type { ReelItem } from "../data/videos";
import { reelItems } from "../data/videos";
import VideoCard from "./VideoCard";

interface VideoCarouselProps {
  onPreview: (item: ReelItem) => void;
}

const REFERENCE_PITCH = 196;
const REFERENCE_WIDTH = 170;
const REFERENCE_HEIGHT = 280;
const REFERENCE_EDGE = 706;

export default function VideoCarousel({ onPreview }: VideoCarouselProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const offsetRef = useRef(0);
  const hoveredRef = useRef(false);
  const dragRef = useRef({
    active: false,
    startX: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    moved: false,
  });
  const suppressClickRef = useRef(false);

  const drawCards = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const width = stage.clientWidth;
    const scale = Math.max(0.52, Math.min(1, width / 1100));
    const total = REFERENCE_PITCH * reelItems.length;
    const center = width / 2;
    const centerY = stage.clientHeight * 0.54;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      let referenceX = (index * REFERENCE_PITCH - offsetRef.current) % total;
      if (referenceX < -total / 2) referenceX += total;
      if (referenceX > total / 2) referenceX -= total;

      const distance = Math.min(Math.abs(referenceX) / REFERENCE_EDGE, 1);
      const warpedX =
        referenceX * (1 + 0.083 * (referenceX / REFERENCE_EDGE) ** 2);
      const widthFactor = REFERENCE_WIDTH + 48 * distance ** 2;
      const edgeDistance = Math.min(
        (Math.abs(referenceX) + widthFactor / 2) / REFERENCE_EDGE,
        1,
      );
      const heightFactor = REFERENCE_HEIGHT + 92 * edgeDistance ** 2.6;
      const cardY = centerY - 12 * distance ** 2 * scale;
      const rotation = Math.sign(referenceX) * distance * 4;

      card.style.width = `${widthFactor * scale}px`;
      card.style.height = `${heightFactor * scale}px`;
      card.style.transform =
        `translate(calc(-50% + ${warpedX * scale}px), ` +
        `calc(-50% + ${cardY - centerY}px)) rotate(${rotation}deg)`;
      card.style.left = `${center}px`;
      card.style.top = `${centerY}px`;
      card.style.zIndex = `${10 - Math.round(distance * 5)}`;
    });
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame: number | null = null;
    let previousTime = 0;
    let automaticMotion = !reducedMotion.matches;

    const animate = (time: number) => {
      frame = null;
      const delta = previousTime ? Math.min(time - previousTime, 40) / 1000 : 0;
      previousTime = time;

      if (!dragRef.current.active && Math.abs(dragRef.current.velocity) > 3) {
        offsetRef.current -= dragRef.current.velocity * delta;
        dragRef.current.velocity *= Math.pow(0.92, delta * 60);
      } else if (!dragRef.current.active) {
        dragRef.current.velocity = 0;
        if (automaticMotion && !hoveredRef.current) offsetRef.current += 50 * delta;
      }

      drawCards();
      if (!reducedMotion.matches) frame = window.requestAnimationFrame(animate);
    };

    const startLoop = () => {
      if (!reducedMotion.matches && frame === null) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    const resizeObserver = new ResizeObserver(drawCards);
    resizeObserver.observe(stage);
    const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
      automaticMotion = !event.matches;
      if (event.matches) {
        dragRef.current.velocity = 0;
        if (frame !== null) window.cancelAnimationFrame(frame);
        frame = null;
        previousTime = 0;
        drawCards();
      } else {
        startLoop();
      }
    };

    reducedMotion.addEventListener("change", onMotionPreferenceChange);
    drawCards();
    startLoop();

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      reducedMotion.removeEventListener("change", onMotionPreferenceChange);
    };
  }, [drawCards]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    const scale = Math.max(0.52, Math.min(1, event.currentTarget.clientWidth / 1100));
    dragRef.current = {
      active: true,
      startX: event.clientX,
      lastX: event.clientX,
      lastTime: performance.now(),
      velocity: 0,
      moved: false,
    };
    stageRef.current?.setPointerCapture(event.pointerId);
    stageRef.current?.setAttribute("data-drag-scale", String(scale));
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const now = performance.now();
    const deltaX = event.clientX - dragRef.current.lastX;
    const deltaTime = Math.max(now - dragRef.current.lastTime, 1) / 1000;
    const scale = Number(stageRef.current?.getAttribute("data-drag-scale") ?? 1);
    offsetRef.current -= deltaX / scale;
    dragRef.current.velocity = (deltaX / scale / deltaTime) * 0.18;
    dragRef.current.lastX = event.clientX;
    dragRef.current.lastTime = now;
    if (Math.abs(event.clientX - dragRef.current.startX) > 6) {
      dragRef.current.moved = true;
      suppressClickRef.current = true;
    }
    drawCards();
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    if (!dragRef.current.moved || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dragRef.current.velocity = 0;
    }
    if (stageRef.current?.hasPointerCapture(event.pointerId)) {
      stageRef.current.releasePointerCapture(event.pointerId);
    }
    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);
  };

  return (
    <div
      className="reel-carousel"
      ref={stageRef}
      onPointerEnter={() => {
        hoveredRef.current = true;
      }}
      onPointerLeave={() => {
        hoveredRef.current = false;
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onClickCapture={(event) => {
        if (!suppressClickRef.current) return;
        event.preventDefault();
        event.stopPropagation();
        suppressClickRef.current = false;
      }}
      aria-label="Product reel showcase. Drag to explore."
      role="region"
    >
      {reelItems.map((item, index) => (
        <VideoCard
          key={item.id}
          item={item}
          index={index}
          cardRef={(element) => {
            cardsRef.current[index] = element;
          }}
          onPreview={onPreview}
        />
      ))}
    </div>
  );
}
