const Animal = require("../models/Animal");

// Create a new animal
exports.createAnimal = async (req, res) => {
  try {
    const { name, age, breed } = req.body;
    const image = req.file.path; // Multer saves the file path

    const newAnimal = new Animal({ name, age, breed, image });
    await newAnimal.save();

    res
      .status(201)
      .json({ message: "Animal listed successfully", animal: newAnimal });
  } catch (error) {
    res.status(500).json({ message: "Error listing animal", error });
  }
};

// Fetch all animals
exports.getAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching animals", error });
  }
};
