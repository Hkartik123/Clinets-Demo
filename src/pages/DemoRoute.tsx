import { Link, useParams } from "react-router-dom";
import ArrowIcon from "../components/common/ArrowIcon";
import { demoRegistry } from "../config/demoRegistry";

export default function DemoRoute() {
  const { demoSlug } = useParams();
  const demo = demoRegistry.find((item) => item.slug === demoSlug);

  if (!demo) {
    return (
      <div className="route-message">
        <span className="route-message__eyebrow">DEMO NOT FOUND</span>
        <h1>This preview isn’t in the studio yet.</h1>
        <p>The link may be out of date, or this demo hasn’t been registered.</p>
        <Link className="button button--primary" to="/">
          <ArrowIcon direction="left" /> Back to demo library
        </Link>
      </div>
    );
  }

  const DemoComponent = demo.Component;
  return <DemoComponent />;
}
