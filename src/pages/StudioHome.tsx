import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../components/common/ArrowIcon";
import DemoCard from "../components/cards/DemoCard";
import { demoCategories, demoRegistry } from "../config/demoRegistry";

export default function StudioHome() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All demos");

  const filteredDemos = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return demoRegistry.filter((demo) => {
      const matchesCategory =
        activeCategory === "All demos" || demo.category === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${demo.name} ${demo.category} ${demo.description}`
          .toLowerCase()
          .includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <div className="page-content">
      <section className="welcome-row">
        <div>
          <div className="eyebrow"><span /> YOUR CREATIVE WORKSPACE</div>
          <h1>Good ideas, <span>beautifully built.</span></h1>
          <p className="welcome-row__subtitle">
            Explore the experiences we’re shaping for tomorrow’s clients.
          </p>
        </div>
        <Link className="button button--outline" to="/adding-a-demo">
          <span className="button__plus" aria-hidden="true">+</span>
          Add a demo
        </Link>
      </section>

      <section className="feature-panel" aria-label="Demo Studio introduction">
        <div className="feature-panel__copy">
          <div className="feature-panel__eyebrow">THE NKSKILLEDGE SHOWCASE</div>
          <h2>Make the first<br />impression <em>count.</em></h2>
          <p>
            A home for thoughtful, interactive previews that bring each
            client’s next big idea to life.
          </p>
          <Link to="/adding-a-demo" className="feature-panel__link">
            Explore the studio guide <ArrowIcon />
          </Link>
        </div>
        <div className="feature-art" aria-hidden="true">
          <div className="feature-art__sun" />
          <div className="feature-art__panel feature-art__panel--back">
            <span />
            <span />
            <span />
          </div>
          <div className="feature-art__panel feature-art__panel--front">
            <div className="feature-art__window">
              <span className="feature-art__window-top"><i /><i /><i /></span>
              <span className="feature-art__window-image" />
              <span className="feature-art__window-lines"><i /><i /><i /></span>
            </div>
            <span className="feature-art__floating-dot" />
          </div>
          <div className="feature-art__spark feature-art__spark--one">✳</div>
          <div className="feature-art__spark feature-art__spark--two">✳</div>
        </div>
        <div className="feature-panel__index">01 — 04</div>
      </section>

      <section className="library-section" aria-labelledby="library-title">
        <div className="library-section__heading">
          <div>
            <div className="eyebrow eyebrow--muted">YOUR COLLECTION</div>
            <h2 id="library-title">Demo library <span>{demoRegistry.length.toString().padStart(2, "0")}</span></h2>
          </div>
          <div className="library-section__meta">
            <span className="library-section__live-dot" />
            {demoRegistry.filter((demo) => demo.status === "ready").length} ready to explore
          </div>
        </div>

        <div className="library-tools">
          <label className="search-field">
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
              <circle cx="8.9" cy="8.9" r="5.9" stroke="currentColor" strokeWidth="1.5" />
              <path d="m13.3 13.3 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="visually-hidden">Search demos</span>
            <input
              type="search"
              placeholder="Search demos..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <div className="category-filters" aria-label="Filter by category">
            {["All demos", ...demoCategories].map((category) => (
              <button
                key={category}
                className={`category-filter${activeCategory === category ? " category-filter--active" : ""}`}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredDemos.length > 0 ? (
          <div className="demo-grid">
            {filteredDemos.map((demo, index) => (
              <DemoCard demo={demo} index={index} key={demo.slug} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state__illustration" aria-hidden="true">
              <span className="empty-state__paper empty-state__paper--back" />
              <span className="empty-state__paper empty-state__paper--front">
                <i /><i /><i />
              </span>
              <span className="empty-state__spark">✳</span>
            </div>
            <div className="empty-state__eyebrow">A FRESH CANVAS</div>
            <h3>{query ? "No demos match that search" : "Your first demo starts here"}</h3>
            <p>
              {query
                ? "Try another name or category to find what you’re looking for."
                : "This studio is ready for its first client experience. Add a demo when you’re ready to bring an idea to life."}
            </p>
            {query ? (
              <button className="text-button" type="button" onClick={() => setQuery("")}>
                Clear search <ArrowIcon />
              </button>
            ) : (
              <Link className="button button--primary" to="/adding-a-demo">
                See how to add a demo <ArrowIcon />
              </Link>
            )}
          </div>
        )}
        <div className="library-note">
          <span aria-hidden="true">✳</span>
          Demos are private previews powered by local sample data.
        </div>
      </section>
    </div>
  );
}
