import "../styles/Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" data-aos="fade-up">
      {/* Background Blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      {/* Left Content */}
      <div className="hero-left">
        <div className="hero-badge">
          ✨ A safe space for anonymous letters
        </div>

        <p className="hero-tag">
          Anonymous • Kind • Meaningful
        </p>

        <h1>ANAMIKA</h1>

        <h2>Letters Beyond Names</h2>

        <p className="hero-text">
          Sometimes the kindest words come from strangers.
          Share your thoughts, encouragement, gratitude,
          or stories anonymously and brighten someone's day.
        </p>

        <div className="buttons">
          <Link to="/write">
            <button>✍️ Write a Letter</button>
          </Link>

          <Link to="/letters">
            <button className="secondary">
              📖 Read Letters
            </button>
          </Link>
        </div>
      </div>

      {/* Right Content */}
      <div className="hero-right">
        <div className="envelope">
          💌
        </div>
      </div>
    </section>
  );
}

export default Hero;