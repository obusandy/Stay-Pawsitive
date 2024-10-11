const express = require("express");
const connection = require("./db");
const animalRoutes = require("./routes/list.Routes");

const app = express();
app.use(express.json()); // For JSON data
app.use("/uploads", express.static("uploads")); // Serve uploaded images
app.use("/api", animalRoutes); // Animal routes

const PORT = process.env.PORT || 8000;
connection();
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
