import { useEffect, useRef, useState } from "react";
import type { ReelItem } from "../data/videos";

interface PreviewModalProps {
  item: ReelItem;
  onClose: () => void;
}

export default function PreviewModal({ item, onClose }: PreviewModalProps) {
  const [videoFailed, setVideoFailed] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    dialogRef.current
      ?.querySelector<HTMLButtonElement>(".reel-preview__close")
      ?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        "button, video[controls]",
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.classList.add("reelmark-modal-open");
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("reelmark-modal-open");
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="reel-preview-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="reel-preview"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="reel-preview-title"
      >
        <button className="reel-preview__close" type="button" onClick={onClose} aria-label="Close preview">
          <span /><span />
        </button>
        {item.videoSrc && !videoFailed ? (
          <video
            className="reel-preview__media"
            src={item.videoSrc}
            poster={item.poster}
            controls
            autoPlay
            muted
            playsInline
            onError={() => setVideoFailed(true)}
          />
        ) : (
          <img className="reel-preview__media" src={item.poster} alt={item.alt} />
        )}
        <div className="reel-preview__details">
          <span>{item.category} · CONCEPT PREVIEW</span>
          <h2 id="reel-preview-title">{item.title}</h2>
          {(!item.videoSrc || videoFailed) && (
            <p>Still-image concept preview. Original product footage has not been supplied for this demo.</p>
          )}
        </div>
      </section>
    </div>
  );
}
