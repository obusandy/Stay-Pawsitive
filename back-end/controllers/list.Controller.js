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
exports.getAdoptableAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching adoptable animals", error });
  }
};

exports.updateAnimalStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await Animal.findById(id);

    if (!animal) {
      return res.status(404).json({ message: "Animal not found" });
    }

    animal.available = false; // Mark as unavailable
    await animal.save();

    res.json({ message: "Animal updated successfully", animal });
  } catch (error) {
    res.status(500).json({ message: "Error updating animal", error });
  }
};
