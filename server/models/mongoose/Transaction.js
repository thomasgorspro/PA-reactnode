const mongoose = require("mongoose");
const db = require('../../lib/mongoose');

const Schema = new mongoose.Schema(
  {
    Customer: {
      ShippingAdress: {
        Address: String,
        City: String,
        Zipcode: String,
        Country: String,
      },
      BillingAddress: {
        Address: String,
        City: String,
        Zipcode: String,
        Country: String,
      }
    },
    ShoppingCart: Array,
    Price: String,
    Currency: String,
    Amount: Number,
    
  }
);

module.exports = db.model("Transaction", Schema);
