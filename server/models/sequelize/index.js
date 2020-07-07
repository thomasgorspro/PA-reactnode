const sequelize = require("../../lib/sequelize");
const Merchant = require("./Merchant");
const User = require("./User");

sequelize
  .sync({ alter: true })
  .then((result) => console.log("Sync OK"))
  .catch((result) => console.error("Sync KO"));

module.exports = {
  sequelize,
  Merchant,
  User
};
