const express = require("express");
const router = express.Router();
const sppController = require("../controllers/sppController");

// Get all spp (GET)
router.get("/", sppController.getAllSPP);

// Get spp by id (GET)
router.get("/:id", sppController.getSPPById);

// Update spp berdasarkan id (PUT)
router.put("/:id", sppController.updateSPP);

module.exports = router;
