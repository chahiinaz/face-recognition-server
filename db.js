const Sequelize = require("sequelize");
const databaseUrl = "postgres://postgres:secret@localhost:5025/postgres";
const db = new Sequelize(databaseUrl);

db.sync({ force: false })
  .then(() => console.log("Database connected!"))
  .catch(console.error);

module.exports = db;