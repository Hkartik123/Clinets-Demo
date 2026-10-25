import { Link } from "react-router-dom";
import ArrowIcon from "../components/common/ArrowIcon";

export default function NotFoundPage() {
  return (
    <div className="route-message">
      <span className="route-message__eyebrow">404 · PAGE NOT FOUND</span>
      <h1>Looks like this page took a different route.</h1>
      <p>Head back to the studio and find your way from there.</p>
      <Link className="button button--primary" to="/">
        <ArrowIcon direction="left" /> Back to demo library
      </Link>
    </div>
  );
}
