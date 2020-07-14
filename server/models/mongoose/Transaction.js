const mongoose = require("mongoose");
const db = require('../../lib/mongoose');

const Schema = new mongoose.Schema(
  {
    Customer: {
      email: String
    },
    Billing: {
      BillingAddress: {
        Firstname: String,
        Lastname: String,
        Address: String,
        City: String,
        Zipcode: String,
        Country: String,
      }
    },
    CompagnyName: String,
    Shipping: String,
    ShoppingCart: Array,
    TotalPrice: String,
  }
);

module.exports = db.model("Transaction", Schema);
