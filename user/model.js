const Sequelize = require("sequelize");
const db = require("../db.js");

const User = db.define("user", {
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  entries: { type: Sequelize.INTEGER },
  joined: new Date(),
});

module.exports = User;
