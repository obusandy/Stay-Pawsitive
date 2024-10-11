import React, { useState } from "react";
import axios from "axios";

function AnimalForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("age", formData.age);
    data.append("breed", formData.breed);
    data.append("image", formData.image);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/list-animal",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading animal:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Animal Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Animal Age"
        value={formData.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="breed"
        placeholder="Animal Breed"
        value={formData.breed}
        onChange={handleChange}
      />
      <input type="file" name="image" onChange={handleFileChange} />
      <button type="submit">List Animal</button>
    </form>
  );
}

export default AnimalForm;
