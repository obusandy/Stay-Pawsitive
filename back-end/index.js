const express = require("express");
const connection = require("./db");
const cors = require("cors");
const path = require("path");
const animalRoutes = require("./routes/list.Routes");
const appointmentRoutes = require("./routes/appointment.Routes");
const tipRoutes = require("./routes/tips.Routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH"],
  })
);

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", animalRoutes);
app.use("/api", appointmentRoutes);
app.use("/api", tipRoutes);


const PORT = process.env.PORT || 8000;
connection();
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
