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

module.exports = app;
