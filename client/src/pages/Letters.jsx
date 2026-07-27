import { useEffect, useState } from "react";
import "../styles/Letters.css";
import { formatDate } from "../utils/formatDate";

function Letters() {
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchLetters();
  }, []);

  const fetchLetters = async () => {
    try {
      const response = await fetch("http://localhost:5500/api/letters");
      const data = await response.json();

      setLetters(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2 className="loading">Loading letters...</h2>;
  }
  const handleLike = async (id) => {
  try {
    await fetch(`http://localhost:5500/api/letters/${id}/like`, {
      method: "PUT",
    });

    fetchLetters();
  } catch (error) {
    console.error(error);
  }
};
const filteredLetters = letters.filter((letter) => {
  const query = search.toLowerCase();

  const matchesSearch =
    letter.title.toLowerCase().includes(query) ||
    letter.message.toLowerCase().includes(query);

  const matchesCategory =
    selectedCategory === "All" ||
    letter.category === selectedCategory;

  return matchesSearch && matchesCategory;
});
  return (
    <div className="letters-page">
      <h1>💌 Anonymous Letters</h1>
      <p className="letters-subtitle">
        Read words of hope, kindness and encouragement.
      </p>
      <div className="search-container">
  <input
    type="text"
    placeholder="🔍 Search letters..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="search-input"
  />
</div>
<div className="filter-buttons">
  <button onClick={() => setSelectedCategory("All")}>All</button>

  <button onClick={() => setSelectedCategory("Motivation")}>
    Motivation
  </button>

  <button onClick={() => setSelectedCategory("Hope")}>
    Hope
  </button>

  <button onClick={() => setSelectedCategory("Gratitude")}>
    Gratitude
  </button>

  <button onClick={() => setSelectedCategory("Friendship")}>
    Friendship
  </button>

  <button onClick={() => setSelectedCategory("Advice")}>
    Advice
  </button>

  <button onClick={() => setSelectedCategory("Confession")}>
    Confession
  </button>
</div>

      <div className="letters-grid">
        {filteredLetters.map((letter) => (
          <div className="letter-card" key={letter._id}>
            <div className="card-top">
              <span className="mood">{letter.mood}</span>
              <span className="category">{letter.category}</span>
            </div>

            <h2>{letter.title}</h2>

            <p className="message">{letter.message}</p>
<div className="card-footer">
  <span>💌 Anonymous</span>

  <button
    className="like-btn"
    onClick={() => handleLike(letter._id)}
  >
    ❤️ {letter.likes}
  </button>
  <p className="date">
  {formatDate(letter.createdAt)}
</p>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Letters;