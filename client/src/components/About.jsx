import "../styles/About.css";

function About() {
  return (
    <section
      id="about"
      className="about"
      data-aos="fade-up"
    >

      <h2>Why ANAMIKA?</h2>

      <div className="cards">

        <div className="card">
          <span>🤍</span>
          <h3>Anonymous</h3>
          <p>
            Share your thoughts without revealing your identity.
          </p>
        </div>

        <div className="card">
          <span>💌</span>
          <h3>Kindness</h3>
          <p>
            Encourage someone through heartfelt words.
          </p>
        </div>

        <div className="card">
          <span>🌎</span>
          <h3>Connection</h3>
          <p>
            Reach people across the world with a simple letter.
          </p>
        </div>

        <div className="card">
          <span>🌸</span>
          <h3>Hope</h3>
          <p>
            Every letter has the power to brighten someone's day.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;