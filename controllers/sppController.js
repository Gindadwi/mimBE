const { SPP, User } = require("../models");

// Get spp by ID (jika ingin mengambil spp berdasarkan id spp)
exports.getSPPById = async (req, res) => {
  try {
    const spp = await SPP.findByPk(req.params.id, {
      include: [{ model: User, as: "user" }],
    });
    if (!spp) return res.status(404).json({ message: "SPP tidak ditemukan" });
    res.status(200).json(spp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all spp records
exports.getAllSPP = async (req, res) => {
  try {
    const spps = await SPP.findAll({
      include: [{ model: User, as: "user" }],
    });
    res.status(200).json(spps);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update spp berdasarkan ID
exports.updateSPP = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await SPP.update(req.body, { where: { id } });
    if (updated) {
      const updatedSPP = await SPP.findByPk(id);
      return res.status(200).json(updatedSPP);
    }
    res.status(404).json({ message: "SPP tidak ditemukan" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
