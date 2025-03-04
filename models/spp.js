module.exports = (sequelize, DataTypes) => {
  const SPP = sequelize.define("SPP", {
    bulan_januari: DataTypes.INTEGER,
    bulan_februari: DataTypes.INTEGER,
    bulan_maret: DataTypes.INTEGER,
    bulan_april: DataTypes.INTEGER,
    bulan_mei: DataTypes.INTEGER,
    bulan_juni: DataTypes.INTEGER,
    bulan_juli: DataTypes.INTEGER,
    bulan_agustus: DataTypes.INTEGER,
    bulan_september: DataTypes.INTEGER,
    bulan_oktober: DataTypes.INTEGER,
    bulan_november: DataTypes.INTEGER,
    bulan_desember: DataTypes.INTEGER,
  });

  SPP.associate = function (models) {
    // Record SPP milik satu User
    SPP.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  };

  return SPP;
};
