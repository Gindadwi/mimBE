require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./models");

app.use(express.json());

// Routing untuk user dan spp
const userRoutes = require("./routes/userRoutes");
const sppRoutes = require("./routes/sppRoutes");

app.use("/api/users", userRoutes);
app.use("/api/spp", sppRoutes);

const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

// Middleware untuk menangani route yang tidak ditemukan
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
