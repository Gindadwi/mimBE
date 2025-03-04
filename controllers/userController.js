const { User, SPP } = require("../models");
const jwt = require("jsonwebtoken");

// Register: Simpan user dan buat spp default (setiap bulan = 50000)
exports.register = async (req, res) => {
  try {
    const { nama, nisn, alamat, kelas, noHp, password } = req.body;
    if (!nama || !nisn || !alamat || !kelas || !noHp || !password) {
      return res.status(400).json({ message: "Semua data harus diisi" });
    }
    // Buat user
    const newUser = await User.create({
      nama,
      nisn,
      alamat,
      kelas,
      noHp,
      password,
    });
    // Buat spp dengan default 50000 untuk setiap bulan
    const defaultSPP = {
      bulan_januari: 50000,
      bulan_februari: 50000,
      bulan_maret: 50000,
      bulan_april: 50000,
      bulan_mei: 50000,
      bulan_juni: 50000,
      bulan_juli: 50000,
      bulan_agustus: 50000,
      bulan_september: 50000,
      bulan_oktober: 50000,
      bulan_november: 50000,
      bulan_desember: 50000,
      userId: newUser.id,
    };
    const newSPP = await SPP.create(defaultSPP);
    res.status(201).json({ user: newUser, spp: newSPP });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login: validasi nisn dan password
exports.login = async (req, res) => {
  try {
    const { nisn, password } = req.body;
    if (!nisn || !password) {
      return res.status(400).json({ message: "NISN dan password harus diisi" });
    }
    const user = await User.findOne({ where: { nisn } });
    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }
    // Perbandingan sederhana (disarankan gunakan hashing seperti bcrypt di produksi)
    if (user.password !== password) {
      return res.status(401).json({ message: "Password salah" });
    }
    // Generate token menggunakan JWT
    const token = jwt.sign(
      { id: user.id, nisn: user.nisn },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Token akan expired setelah 1 jam
    );
    res.status(200).json({ message: "Login berhasil", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get user by ID beserta spp
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [{ model: SPP, as: "spp" }],
    });
    if (!user) return res.status(404).json({ message: "User tidak ditemukan" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all users beserta spp
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: SPP, as: "spp" }],
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update user berdasarkan ID
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await User.update(req.body, { where: { id } });
    if (updated) {
      const updatedUser = await User.findByPk(id, {
        include: [{ model: SPP, as: "spp" }],
      });
      return res.status(200).json(updatedUser);
    }
    res.status(404).json({ message: "User tidak ditemukan" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
