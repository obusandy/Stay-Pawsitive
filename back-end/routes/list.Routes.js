const express = require("express");
const multer = require("multer");
const { createAnimal, getAnimals } = require("../controllers/list.Controller");

const router = express.Router();

// Multer configuration for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.imagename}`);
  },
});
const upload = multer({ storage });

// Routes
router.post("/list-animal", upload.single("image"), createAnimal);
router.get("/animals", getAnimals);

module.exports = router;
