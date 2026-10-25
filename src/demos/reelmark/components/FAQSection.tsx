import { useState } from "react";

const questions = [
  {
    question: "What is Reelmark?",
    answer:
      "Reelmark is a concept for a marketplace that helps brands discover short-form product creators and plan social-ready video. This page is a visual demo, not a live service.",
  },
  {
    question: "Who creates the videos?",
    answer:
      "The creator cards shown here are fictional demo profiles. A real marketplace would introduce creators with verified portfolios, specialties, and collaboration details.",
  },
  {
    question: "What does a project cost?",
    answer:
      "The plans on this page are illustrative sample pricing only. They are not an offer, quote, or guarantee of real services.",
  },
  {
    question: "Can I use the example clips in my campaign?",
    answer:
      "The local photos are visual concept assets. No creator videos have been supplied for this demo, so the carousel currently shows still-image posters only.",
  },
];

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  return (
    <section className="reel-faq reel-section" id="faq" aria-labelledby="faq-title">
      <div className="reel-faq__intro">
        <p className="reel-section-label">A FEW GOOD QUESTIONS</p>
        <h2 id="faq-title">Good to <em>know.</em></h2>
        <p>Useful details, without the fine-print feeling.</p>
      </div>
      <div className="reel-faq__list">
        {questions.map((item, index) => {
          const isOpen = openQuestion === index;
          const answerId = `reelmark-faq-answer-${index}`;
          return (
            <article className={`reel-faq__item${isOpen ? " is-open" : ""}`} key={item.question}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenQuestion(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <span className="reel-faq__toggle" aria-hidden="true" />
                </button>
              </h3>
              <div className="reel-faq__answer" id={answerId} hidden={!isOpen}>
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
