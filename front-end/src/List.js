// front-end/src/components/ListingForm.js
import React, { useState } from "react";
import axios from "axios";

const ListingForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const animalData = { name, age, breed, image };

    try {
      await axios.post("http://localhost:8000/api/animals", animalData);
      alert("Animal listed successfully!");
      // Clear form fields
      setName("");
      setAge("");
      setBreed("");
      setImage("");
    } catch (error) {
      console.error("Error listing animal:", error);
      alert("Failed to list animal.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>List Your Animal</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Breed:</label>
        <input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <button type="submit">List Animal</button>
    </form>
  );
};

export default ListingForm;
