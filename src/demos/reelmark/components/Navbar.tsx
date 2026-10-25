import { useState } from "react";
import { LeafIcon } from "./Icons";

const links = [
  { label: "Brands", href: "#brands" },
  { label: "Creators", href: "#creators" },
  { label: "Pricing", href: "#pricing" },
  { label: "Use cases", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginNotice, setLoginNotice] = useState(false);

  return (
    <header className="reelmark-nav">
      <a className="reelmark-logo" href="#top" aria-label="Reelmark home">
        <LeafIcon className="reelmark-logo__icon" />
        <span>reelmark<span className="reelmark-logo__period">.</span></span>
      </a>

      <button
        className={`reelmark-menu-toggle${menuOpen ? " is-open" : ""}`}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="reelmark-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav
        className={`reelmark-nav__links${menuOpen ? " is-open" : ""}`}
        id="reelmark-navigation"
        aria-label="Reelmark navigation"
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <button
          className="reelmark-nav__mobile-login"
          type="button"
          onClick={() => {
            setMenuOpen(false);
            setLoginNotice(true);
          }}
        >
          Log in
        </button>
        <a className="reelmark-nav__mobile-signup" href="#signup" onClick={() => setMenuOpen(false)}>
          Sign up <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <div className="reelmark-nav__actions">
        <button
          className="reelmark-nav__login"
          type="button"
          onClick={() => setLoginNotice(true)}
        >
          Log in
        </button>
        <a className="reelmark-button reelmark-button--nav" href="#signup">
          Sign up <span aria-hidden="true">↗</span>
        </a>
      </div>
      {loginNotice && (
        <div className="reelmark-login-notice" role="status">
          <span>Sign-in isn’t enabled in this concept demo.</span>
          <button
            type="button"
            aria-label="Dismiss sign-in notice"
            onClick={() => setLoginNotice(false)}
          >
            ×
          </button>
        </div>
      )}
    </header>
  );
}
