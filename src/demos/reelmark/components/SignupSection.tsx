import { useState, type FormEvent } from "react";
import { ArrowIcon, LeafIcon } from "./Icons";

export default function SignupSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedEmail = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setMessage("Enter a valid email address to try the demo signup.");
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setMessage("You’re on the list — this is a demo confirmation. Nothing was sent.");
  };

  return (
    <section className="reel-signup" id="signup" aria-labelledby="signup-title">
      <div className="reel-signup__ornament" aria-hidden="true"><LeafIcon /></div>
      <p className="reel-section-label reel-section-label--light">READY WHEN YOU ARE</p>
      <h2 id="signup-title">Your next great Reel<br />starts here.</h2>
      <p className="reel-signup__copy">
        Tell us where to send your concept preview. This demo form stays right here.
      </p>
      <form className="reel-signup__form" onSubmit={onSubmit} noValidate>
        <label className="visually-hidden" htmlFor="reelmark-email">Email address</label>
        <input
          id="reelmark-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          value={email}
          aria-describedby="reelmark-form-message"
          onChange={(event) => {
            setEmail(event.target.value);
            setMessage("");
            setSubmitted(false);
          }}
          required
        />
        <button type="submit" aria-label="Join the Reelmark demo list">
          Let’s talk <ArrowIcon />
        </button>
      </form>
      <p
        className={`reel-signup__message${submitted ? " is-success" : ""}`}
        id="reelmark-form-message"
        aria-live="polite"
      >
        {message || "Sample interaction only. No email is sent or stored."}
      </p>
    </section>
  );
}
