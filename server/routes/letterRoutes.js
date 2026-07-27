import express from "express";

import {
  createLetter,
  getLetters,
  getRandomLetter,
  likeLetter,
  deleteLetter,
} from "../controllers/letterController.js";

const router = express.Router();

router.post("/", createLetter);

router.get("/", getLetters);

router.get("/random", getRandomLetter);
router.put("/:id/like", likeLetter);

router.delete("/:id", deleteLetter);

export default router;