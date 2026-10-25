import { creators } from "../data/creators";
import { workItems } from "../data/videos";
import { ArrowIcon, SparkIcon } from "./Icons";

const processSteps = [
  {
    number: "01",
    title: "Tell us about your product",
    description:
      "Share the little details: what makes it special, who it is for, and where it should show up.",
    imageClass: "reel-process-card__art--brief",
  },
  {
    number: "02",
    title: "Meet your kind of creator",
    description:
      "Explore a handpicked match and align on the mood, moments, and message before filming.",
    imageClass: "reel-process-card__art--match",
  },
  {
    number: "03",
    title: "Make something that moves",
    description:
      "Get short-form creative made for the feed and ready to share wherever your audience is.",
    imageClass: "reel-process-card__art--reel",
  },
];

const benefits = [
  {
    number: "01",
    title: "Product-first stories",
    description:
      "Make the details, texture, and tiny moments around your product the reason someone stops scrolling.",
  },
  {
    number: "02",
    title: "Creators worth finding",
    description:
      "Explore independent makers by their craft and point of view—not a sea of one-size-fits-all content.",
  },
  {
    number: "03",
    title: "A clearer creative brief",
    description:
      "Keep the idea, references, feedback, and next steps together from the first hello through delivery.",
  },
  {
    number: "04",
    title: "Made for the scroll",
    description:
      "Shape concise, vertical-first product stories for the places your community already spends time.",
  },
];

export function WorkSection() {
  return (
    <section className="reel-work reel-section" id="brands" aria-labelledby="work-title">
      <div className="reel-section-heading">
        <div>
          <p className="reel-section-label">SMALL STORIES. BIG FEELING.</p>
          <h2 id="work-title">A few ideas in <em>motion.</em></h2>
        </div>
        <p>Concept projects made to show what a product story could feel like.</p>
      </div>
      <div className="reel-work__grid">
        {workItems.map((work, index) => (
          <a
            className={`reel-work-card reel-work-card--${index + 1}`}
            href="#signup"
            key={work.brand}
            aria-label={`${work.title}, ${work.category}. Start a project`}
          >
            <img src={work.image} alt={work.alt} loading="lazy" decoding="async" />
            <span className="reel-work-card__overlay" />
            <span className="reel-work-card__index">0{index + 1} / CONCEPT</span>
            <span className="reel-work-card__caption">
              <span>{work.brand} <i>·</i> {work.category}</span>
              <strong>{work.title}</strong>
            </span>
            <span className="reel-work-card__arrow"><ArrowIcon /></span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section className="reel-process reel-section" id="how-it-works" aria-labelledby="process-title">
      <div className="reel-section-heading reel-section-heading--center">
        <p className="reel-section-label">FROM FIRST THOUGHT TO FIRST FRAME</p>
        <h2 id="process-title">Simple as <em>one, two, reel.</em></h2>
        <p>A little less back-and-forth. A lot more making.</p>
      </div>
      <div className="reel-process__grid">
        {processSteps.map((step) => (
          <article className="reel-process-card" key={step.number}>
            <div className={`reel-process-card__art ${step.imageClass}`} aria-hidden="true">
              <span className="reel-process-card__sun" />
              <span className="reel-process-card__shape reel-process-card__shape--one" />
              <span className="reel-process-card__shape reel-process-card__shape--two" />
              <SparkIcon />
            </div>
            <span className="reel-process-card__number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CreatorSection() {
  return (
    <section className="reel-creators reel-section" id="creators" aria-labelledby="creators-title">
      <div className="reel-creators__intro">
        <p className="reel-section-label">GOOD PEOPLE, GOOD POINT OF VIEW</p>
        <h2 id="creators-title">Meet the makers<br />behind the <em>moments.</em></h2>
        <p>
          A glimpse at the kind of thoughtful, independent creators a future
          Reelmark marketplace could bring together.
        </p>
        <a className="reel-text-link" href="#signup">Find your creative match <ArrowIcon /></a>
        <span className="reel-creators__note">Profiles shown are fictional demo examples.</span>
      </div>
      <div className="reel-creators__grid">
        {creators.map((creator, index) => (
          <article className={`creator-card creator-card--${index + 1}`} key={creator.name}>
            <div className="creator-card__photo">
              <img src={creator.image} alt={creator.alt} loading="lazy" decoding="async" />
              <span className="creator-card__badge">DEMO PROFILE</span>
              <span className="creator-card__initials">{creator.initials}</span>
            </div>
            <div className="creator-card__details">
              <div>
                <h3>{creator.name}</h3>
                <p>{creator.location}</p>
              </div>
              <span>{creator.specialty}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section className="reel-benefits reel-section" aria-labelledby="benefits-title">
      <div className="reel-benefits__heading">
        <p className="reel-section-label">A BETTER WAY TO GET CREATIVE</p>
        <h2 id="benefits-title">Bring your brand<br />a little <em>closer.</em></h2>
        <p>
          Big-agency thinking is nice. A nimble creative partner who gets your
          product is even better.
        </p>
      </div>
      <div className="reel-benefits__list">
        {benefits.map((benefit) => (
          <article className="reel-benefit" key={benefit.number}>
            <span>{benefit.number}</span>
            <div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
            <ArrowIcon />
          </article>
        ))}
      </div>
    </section>
  );
}
