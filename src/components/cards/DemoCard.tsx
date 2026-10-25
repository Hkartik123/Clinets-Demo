import { Link } from "react-router-dom";
import ArrowIcon from "../common/ArrowIcon";
import type { DemoDefinition } from "../../types/demo";

interface DemoCardProps {
  demo: DemoDefinition;
  index: number;
}

export default function DemoCard({ demo, index }: DemoCardProps) {
  const statusLabel = demo.status === "ready" ? "Ready to preview" : "In development";

  return (
    <article className="demo-card">
      <div className={`demo-card__cover demo-card__cover--${index % 4}`}>
        <div className="demo-card__cover-orbit" aria-hidden="true" />
        <span className="demo-card__category">{demo.category}</span>
        <span className="demo-card__cover-mark" aria-hidden="true">
          {demo.name.slice(0, 1).toUpperCase()}
        </span>
        <span className="demo-card__cover-caption">CLIENT CONCEPT · 0{index + 1}</span>
      </div>
      <div className="demo-card__content">
        <div className="demo-card__title-row">
          <h3>{demo.name}</h3>
          <span className={`demo-card__status demo-card__status--${demo.status}`}>
            <span />{statusLabel}
          </span>
        </div>
        <p>{demo.description}</p>
        <div className="demo-card__bottom">
          <span className="demo-card__slug">/demos/{demo.slug}</span>
          <Link className="demo-card__preview" to={`/demos/${demo.slug}`}>
            Preview <ArrowIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}
