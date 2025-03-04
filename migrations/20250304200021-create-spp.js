"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("SPPs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bulan_januari: {
        type: Sequelize.INTEGER,
      },
      bulan_februari: {
        type: Sequelize.INTEGER,
      },
      bulan_maret: {
        type: Sequelize.INTEGER,
      },
      bulan_april: {
        type: Sequelize.INTEGER,
      },
      bulan_mei: {
        type: Sequelize.INTEGER,
      },
      bulan_juni: {
        type: Sequelize.INTEGER,
      },
      bulan_juli: {
        type: Sequelize.INTEGER,
      },
      bulan_agustus: {
        type: Sequelize.INTEGER,
      },
      bulan_september: {
        type: Sequelize.INTEGER,
      },
      bulan_oktober: {
        type: Sequelize.INTEGER,
      },
      bulan_november: {
        type: Sequelize.INTEGER,
      },
      bulan_desember: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users", // harus sesuai dengan nama tabel yang dibuat di migrasi User
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("SPPs");
  },
};
