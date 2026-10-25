import { ArrowIcon } from "./Icons";

const plans = [
  {
    name: "First Frame",
    description: "A thoughtful first step for a product with a story to tell.",
    price: "$249",
    detail: "sample project",
    features: ["1 creator concept", "One short-form video brief", "A simple feedback round"],
    featured: false,
  },
  {
    name: "The Series",
    description: "A little more room to find your rhythm and tell more of the story.",
    price: "$599",
    detail: "sample project",
    features: ["3 creator concepts", "A campaign-ready content plan", "Two feedback rounds"],
    featured: true,
  },
];

export default function PricingSection() {
  return (
    <section className="reel-pricing reel-section" id="pricing" aria-labelledby="pricing-title">
      <div className="reel-pricing__heading">
        <p className="reel-section-label">GOOD IDEAS, CLEAR STARTING POINTS</p>
        <h2 id="pricing-title">A plan for the <em>next thing.</em></h2>
        <p>Illustrative concept pricing. Not a live offer or commercial quote.</p>
      </div>
      <div className="reel-pricing__grid">
        {plans.map((plan) => (
          <article className={`reel-price-card${plan.featured ? " is-featured" : ""}`} key={plan.name}>
            {plan.featured && <span className="reel-price-card__ribbon">MOST ROOM TO PLAY</span>}
            <p className="reel-price-card__name">{plan.name}</p>
            <p className="reel-price-card__description">{plan.description}</p>
            <p className="reel-price-card__price">
              <strong>{plan.price}</strong><span> / {plan.detail}</span>
            </p>
            <a className={plan.featured ? "reel-button reel-button--dark" : "reel-button reel-button--light"} href="#signup">
              Start a conversation <ArrowIcon />
            </a>
            <p className="reel-price-card__includes">A CONCEPT STARTING POINT</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
