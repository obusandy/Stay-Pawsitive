import React, { useState } from "react";
import axios from "axios";

function AnimalForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
    image: null,
  });
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message
  const [successMessage, setSuccessMessage] = useState("");

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
      await axios.post("http://localhost:8000/api/list-animal", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccessMessage("Animal listed successfully!");
      setErrorMessage("");

      setFormData({
        name: "",
        age: "",
        breed: "",
        image: null,
      });
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Error uploading animal."
      );
      setSuccessMessage("");
    }
  };

  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Animal Name"
          value={formData.name}
          onChange={handleChange}
          className="mb-3"
        />
        <input
          type="number"
          name="age"
          placeholder="Animal Age"
          value={formData.age}
          onChange={handleChange}
          className="mb-3"
        />
        <input
          type="text"
          name="breed"
          placeholder="Animal Breed"
          value={formData.breed}
          onChange={handleChange}
          className="mb-3"
        />
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          className="mb-3"
        />
        <button type="submit">List Animal</button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
}

export default AnimalForm;
