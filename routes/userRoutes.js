const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Endpoint register (POST)
router.post("/register", userController.register);

// Endpoint login (POST)
router.post("/login", userController.login);

// Get user by id beserta spp (GET)
router.get("/:id", userController.getUserById);

// Get all users (GET)
router.get("/", userController.getAllUsers);

// Update user berdasarkan id (PUT)
router.put("/:id", userController.updateUser);

module.exports = router;
