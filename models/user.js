module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    nama: DataTypes.STRING,
    nisn: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kelas: DataTypes.STRING,
    noHp: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  User.associate = function (models) {
    // Satu user memiliki satu spp
    User.hasOne(models.SPP, { foreignKey: "userId", as: "spp" });
  };

  return User;
};
