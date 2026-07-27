import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import letterRoutes from "./routes/letterRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/letters", letterRoutes);

app.get("/", (req, res) => {
  res.send("💌 Welcome to ANAMIKA Backend!");
});

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});