import { LeafIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="reel-footer" id="contact">
      <div className="reel-footer__top">
        <a className="reelmark-logo reelmark-logo--footer" href="#top" aria-label="Reelmark home">
          <LeafIcon className="reelmark-logo__icon" />
          <span>reelmark<span className="reelmark-logo__period">.</span></span>
        </a>
        <p>Little stories, made to move.</p>
        <nav aria-label="Footer navigation">
          <a href="#brands">Brands</a>
          <a href="#creators">Creators</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#signup">Get in touch</a>
        </nav>
        <div className="reel-footer__social" aria-label="Social platforms">
          <span>FIND YOUR PEOPLE</span>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram platform homepage; demo profile not supplied">Instagram ↗</a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok platform homepage; demo profile not supplied">TikTok ↗</a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube platform homepage; demo profile not supplied">YouTube ↗</a>
        </div>
      </div>
      <div className="reel-footer__bottom">
        <span>© 2026 Reelmark · A concept demo by NKSKILLEDGE.</span>
        <span>Independent idea. Imaginative by design.</span>
      </div>
    </footer>
  );
}
