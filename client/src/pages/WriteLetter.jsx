import { useState } from "react";
import "../styles/WriteLetter.css";

function WriteLetter() {
  const [formData, setFormData] = useState({
    title: "",
    category: "Motivation",
    message: "",
    mood: "🌸",
    anonymous: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/letters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    alert("💌 Letter sent successfully!");

    setFormData({
      title: "",
      category: "Motivation",
      message: "",
      mood: "🌸",
      anonymous: true,
    });

  } catch (error) {
    alert(error.message);
  }
};

  return (
    <div className="write-container">
      <form onSubmit={handleSubmit}>

      <h1>💌 Write an Anonymous Letter</h1>

      <p className="subtitle">
        Your words may brighten someone's day.
      </p>



        <label>Category</label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option>Motivation</option>
          <option>Gratitude</option>
          <option>Friendship</option>
          <option>Hope</option>
          <option>Advice</option>
          <option>Confession</option>
        </select>

        <label>Letter Title</label>

        <input
          type="text"
          name="title"
          placeholder="Give your letter a title..."
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Your Letter</label>

        <textarea
          rows="8"
          name="message"
          placeholder="Write your anonymous letter..."
          value={formData.message}
          onChange={handleChange}
          required
        />

        <label>Mood</label>

        <select
          name="mood"
          value={formData.mood}
          onChange={handleChange}
        >
          <option>🌸</option>
          <option>❤️</option>
          <option>😊</option>
          <option>✨</option>
          <option>🌙</option>
          <option>💙</option>
        </select>

        <div className="checkbox">

          <input
            type="checkbox"
            name="anonymous"
            checked={formData.anonymous}
            onChange={handleChange}
          />

          <span>Keep my identity anonymous</span>

        </div>

        <button type="submit">
          Send Letter 💌
        </button>

      </form>

    </div>
  );
}

export default WriteLetter;