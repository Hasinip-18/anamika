import "../styles/ExploreLetters.css";

const letters = [
  {
    mood: "🌸 Hope",
    title: "Dear Stranger",
    preview:
      "Even if today wasn't perfect, tomorrow is another chance to begin again.",
    likes: 128,
  },
  {
    mood: "☀️ Gratitude",
    title: "Dear Friend",
    preview:
      "Someone out there is thankful for a kindness you may not even remember.",
    likes: 94,
  },
  {
    mood: "🌙 Healing",
    title: "Dear You",
    preview:
      "Healing isn't a race. Every small step forward still counts.",
    likes: 176,
  },
];

function ExploreLetters() {
  return (
    <section className="explore" data-aos="fade-up">
      <h2>Explore Letters</h2>
      <p className="explore-subtitle">
        Read messages shared anonymously by people around the world.
      </p>

      <div className="letter-grid">
        {letters.map((letter, index) => (
          <div className="letter-card" key={index}>
            <span className="mood">{letter.mood}</span>

            <h3>{letter.title}</h3>

            <p>{letter.preview}</p>

            <div className="card-footer">
              <button>Read More →</button>

              <span>🤍 {letter.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExploreLetters;