import { useEffect, useState } from "react";
import "../styles/RandomLetter.css";

function RandomLetter() {
  const [letter, setLetter] = useState(null);

  const fetchRandomLetter = async () => {
    try {
      const response = await fetch(
        "http://localhost:5500/api/letters/random"
      );

      const data = await response.json();
      setLetter(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRandomLetter();
  }, []);

  return (
    <div className="random-page">
      <h1>✨ Random Letter</h1>

      <p className="subtitle">
        A random message of hope, kindness and encouragement.
      </p>

      {letter && (
        <div className="random-card">
          <div className="top">
            <span>{letter.mood}</span>
            <span>{letter.category}</span>
          </div>

          <h2>{letter.title}</h2>

          <p>{letter.message}</p>

          <button onClick={fetchRandomLetter}>
            💌 Read Another Letter
          </button>
        </div>
      )}
    </div>
  );
}

export default RandomLetter;