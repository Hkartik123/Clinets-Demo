import { useCallback, useEffect, useState } from "react";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import {
  BenefitsSection,
  CreatorSection,
  HowItWorksSection,
  WorkSection,
} from "../components/FeatureSections";
import Navbar from "../components/Navbar";
import PricingSection from "../components/PricingSection";
import PreviewModal from "../components/PreviewModal";
import SignupSection from "../components/SignupSection";
import VideoCarousel from "../components/VideoCarousel";
import type { ReelItem } from "../data/videos";
import "../styles/reelmark.css";

export default function ReelmarkPage() {
  const [previewItem, setPreviewItem] = useState<ReelItem | null>(null);
  const closePreview = useCallback(() => setPreviewItem(null), []);

  useEffect(() => {
    document.title = "Reelmark — Captivate Crowds with Snackable Reels";
    return () => {
      document.title = "Demo Studio | NKSKILLEDGE";
    };
  }, []);

  return (
    <main className="reelmark" id="top">
      <Navbar />
      <section className="reel-hero" aria-labelledby="reelmark-title">
        <div className="reel-hero__content">
          <div className="reel-trust-badge">
            <span className="reel-trust-badge__spark" aria-hidden="true">✳</span>
            Trusted by 120,000+ indie makers
            <span className="reel-trust-badge__concept">concept stat</span>
          </div>
          <h1 id="reelmark-title">
            <span>Captivate Crowds</span>
            <span>with Snackable Reels</span>
          </h1>
          <p className="reel-hero__copy">
            Grow your brand with short, snappy product clips by our handpicked
            video makers. Our crew is ready to lift your next launch higher.
          </p>
          <div className="reel-hero__cta-wrap">
            <span className="reel-hero__scribble" aria-hidden="true">Be seen with clips</span>
            <svg className="reel-hero__arrow reel-hero__arrow--right" viewBox="0 0 106 56" fill="none" aria-hidden="true">
              <path d="M2 7c27-8 55 1 66 20 5 9 11 16 25 20m-13-9 14 10 5-16" />
            </svg>
            <svg className="reel-hero__arrow reel-hero__arrow--left" viewBox="0 0 70 46" fill="none" aria-hidden="true">
              <path d="M66 4C41 2 19 14 10 33m0 0 14-7M10 33l1-15" />
            </svg>
            <a className="reel-button reel-button--hero" href="#signup">
              Make a Reel <span aria-hidden="true">↗</span>
            </a>
            <span className="reel-hero__zero-cost" aria-label="Concept call to action">A good place to start</span>
          </div>
        </div>
        <div className="reel-hero__gallery">
          <div className="reel-hero__gallery-meta">
            <span>PRODUCT STORIES, IN GOOD COMPANY</span>
            <span>DRAG TO EXPLORE <i aria-hidden="true">↔</i></span>
          </div>
          <VideoCarousel onPreview={setPreviewItem} />
          <div className="reel-hero__gallery-foot">
            <span>Concept imagery · Still posters, not creator footage</span>
            <span>01—10 <i /></span>
          </div>
        </div>
        <span className="reel-hero__side-note" aria-hidden="true">STORIES THAT STICK AROUND</span>
      </section>

      <div className="reel-concept-note" role="note">
        Reelmark is an NKSKILLEDGE concept demo. Sample statistics, creator profiles,
        project names, and pricing on this page are illustrative—not verified claims or live offers.
      </div>

      <WorkSection />
      <HowItWorksSection />
      <CreatorSection />
      <BenefitsSection />
      <PricingSection />
      <FAQSection />
      <SignupSection />
      <Footer />
      {previewItem && <PreviewModal item={previewItem} onClose={closePreview} />}
    </main>
  );
}
