import { Link } from "react-router-dom";
import ArrowIcon from "../components/common/ArrowIcon";

const steps = [
  {
    number: "01",
    title: "Create an isolated demo",
    description:
      "Add its pages, components, sample data, and styles under src/demos/<demo-name>/. Keep the new brand’s styles scoped to its own folder.",
  },
  {
    number: "02",
    title: "Build the client experience",
    description:
      "Use local mock data and working front-end interactions. Avoid production services, real payments, and real customer information.",
  },
  {
    number: "03",
    title: "Register and preview it",
    description:
      "Add the demo to src/config/demoRegistry.ts with a unique slug and its page component. It will appear in the library at /demos/<slug>.",
  },
  {
    number: "04",
    title: "Check before sharing",
    description:
      "Run the production build, visit the demo route, and check keyboard access and responsive layouts at mobile and desktop sizes.",
  },
];

export default function WorkflowPage() {
  return (
    <div className="page-content workflow-page">
      <Link className="back-link" to="/">
        <ArrowIcon direction="left" /> Back to demo library
      </Link>
      <div className="workflow-page__intro">
        <div className="eyebrow"><span /> A SIMPLE, REPEATABLE WORKFLOW</div>
        <h1>Bring a new idea<br />into the <span>studio.</span></h1>
        <p>
          Each client demo lives on its own, so its visual identity and
          experience can be built with room to breathe.
        </p>
      </div>

      <section className="workflow-card" aria-label="Steps for adding a demo">
        {steps.map((step) => (
          <article className="workflow-step" key={step.number}>
            <span className="workflow-step__number">{step.number}</span>
            <div>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
            <ArrowIcon />
          </article>
        ))}
        <div className="workflow-card__footer">
          <span>Ready to shape the next experience?</span>
          <Link to="/" className="text-button">
            Browse the studio <ArrowIcon />
          </Link>
        </div>
      </section>

      <div className="workflow-doc-link">
        For the complete setup steps, folder conventions, and registration example,
        open <strong>docs/ADDING_A_NEW_DEMO.md</strong> in your workspace.
      </div>
    </div>
  );
}
