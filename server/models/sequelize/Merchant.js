const sequelize = require("../../lib/sequelize");
const { DataTypes, Model } = require("sequelize");
const bcrypt = require("bcryptjs");

const { STRING, BOOLEAN } = DataTypes;
class Merchant extends Model {}
Merchant.init(
  {
    compagnyName: {
      type: STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
    KBIS: {
        type: STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "Email non valide"
            }
        }
    },
    phone: {
        type: STRING,
        unique: true,
        allowNull: false
    },

    confirmationURL: {
        type: STRING,
        unique: true,
        allowNull: false
    },
    redirectionURL: {
        type: STRING,
        unique: true,
        allowNull: false,
    },
    currency: {
      type: STRING,
      allowNull: false,
    },
    clientSecret: STRING,
    clientToken: STRING,

    confirmed: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "Merchant",
    paranoid: true,
  }
);


Merchant.addHook('beforeCreate', async (merchant, options) => {
  const salt = await bcrypt.genSalt();
  merchant.password = await bcrypt.hash(merchant.password, salt);
});

// Schema update
Merchant.sync({
  force: true,
});

module.exports = Merchant;
