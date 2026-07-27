import Letter from "../models/Letter.js";

// Create a new letter
export const createLetter = async (req, res) => {
  try {
    const letter = await Letter.create(req.body);
    res.status(201).json(letter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all letters
export const getLetters = async (req, res) => {
  try {
    const letters = await Letter.find().sort({ createdAt: -1 });
    res.status(200).json(letters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get one random letter
export const getRandomLetter = async (req, res) => {
  try {
    const letter = await Letter.aggregate([{ $sample: { size: 1 } }]);

    res.status(200).json(letter[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a letter
export const deleteLetter = async (req, res) => {
  try {
    await Letter.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Letter deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const likeLetter = async (req, res) => {
  try {
    const letter = await Letter.findById(req.params.id);

    if (!letter) {
      return res.status(404).json({
        message: "Letter not found",
      });
    }

    letter.likes += 1;

    await letter.save();

    res.status(200).json(letter);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};