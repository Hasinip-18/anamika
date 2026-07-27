import mongoose from "mongoose";

const letterSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Motivation",
        "Gratitude",
        "Friendship",
        "Hope",
        "Advice",
        "Confession",
      ],
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    mood: {
      type: String,
      default: "🌸",
    },

    anonymous: {
      type: Boolean,
      default: true,
    },

    author: {
      type: String,
      default: "Anonymous",
    },

    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Letter", letterSchema);