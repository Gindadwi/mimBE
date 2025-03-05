require("dotenv").config(); // Pastikan dotenv dipanggil jika menggunakan .env

module.exports = {
  development: {
    username: "root",
    password: null,
    database: "bemim",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "bemim",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: "mysql",
  },
};
