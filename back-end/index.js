const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./db");
const tipRoutes = require("./routes/tips.Routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH"],
  })
);

app.use(express.json());
app.use("/api", tipRoutes);

const PORT = process.env.PORT || 8000;
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
