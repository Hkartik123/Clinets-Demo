import { Link } from "react-router-dom";

interface BrandMarkProps {
  compact?: boolean;
}

export default function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <Link
      className={`brand-mark${compact ? " brand-mark--compact" : ""}`}
      to="/"
      aria-label="NKSKILLEDGE Demo Studio home"
    >
      <span className="brand-mark__symbol" aria-hidden="true">
        K<span>.</span>
      </span>
      {!compact && (
        <span className="brand-mark__wording">
          <strong>NKSKILLEDGE</strong>
          <span>DEMO STUDIO</span>
        </span>
      )}
    </Link>
  );
}
