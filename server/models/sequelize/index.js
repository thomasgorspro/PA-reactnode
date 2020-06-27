const sequelize = require("../../lib/sequelize");
const User = require ("./User");
const Merchant = require("./Merchant");
// require("./hooks");

sequelize
  .sync({ alter: true })
  .then((result) => console.log("Sync OK"))
  .catch((result) => console.error("Failed to Sync"));

module.exports = {
  sequelize,
  User,
  Merchant,
};
