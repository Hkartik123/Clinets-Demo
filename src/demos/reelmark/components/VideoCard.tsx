import { useEffect, useRef, useState } from "react";
import type { ReelItem } from "../data/videos";
import { PlayIcon } from "./Icons";

interface VideoCardProps {
  item: ReelItem;
  index: number;
  cardRef: (element: HTMLElement | null) => void;
  onPreview: (item: ReelItem) => void;
}

export default function VideoCard({
  item,
  index,
  cardRef,
  onPreview,
}: VideoCardProps) {
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!item.videoSrc || !video || videoFailed) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const saveData = connection?.saveData === true;
    let visible = false;

    const syncPlayback = () => {
      if (!visible || reducedMotion.matches || saveData) {
        video.pause();
        return;
      }
      void video.play().catch(() => {
        video.pause();
      });
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    }, { threshold: 0.35 });
    const onMotionChange = () => syncPlayback();

    observer.observe(video);
    reducedMotion.addEventListener("change", onMotionChange);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", onMotionChange);
      video.pause();
    };
  }, [item.videoSrc, videoFailed]);

  return (
    <article
      className="reel-video-card"
      ref={cardRef}
      data-index={index}
      aria-label={`${item.category}: ${item.title}`}
    >
      {item.videoSrc && !videoFailed ? (
        <video
          ref={videoRef}
          className="reel-video-card__media"
          src={item.videoSrc}
          poster={item.poster}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          onError={() => setVideoFailed(true)}
        />
      ) : (
        <img
          className="reel-video-card__media"
          src={item.poster}
          alt=""
          loading={index < 5 ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
        />
      )}
      <span className="reel-video-card__category">{item.category}</span>
      <button
        className="reel-video-card__play"
        type="button"
        aria-label={`Preview ${item.title}`}
        onClick={() => onPreview(item)}
      >
        <PlayIcon />
      </button>
    </article>
  );
}
