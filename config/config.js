require("dotenv").config();

module.exports = {
  development: {
    username: process.env.MYSQLUSER || "root",
    password: process.env.MYSQLPASSWORD || null,
    database: process.env.MYSQLDATABASE || "bemim",
    host: process.env.MYSQLHOST || "127.0.0.1",
    port: process.env.MYSQLPORT ? Number(process.env.MYSQLPORT) : 3306,
    dialect: "mysql",
  },
  production: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT ? Number(process.env.MYSQLPORT) : 3306,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
