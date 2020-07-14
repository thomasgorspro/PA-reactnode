const mongoose = require("mongoose");
const db = require('../../lib/mongoose');

const Schema = new mongoose.Schema(
  {
    customer: {
      shippingAddress: {
        address: String,
        city: String,
        zipcode: String,
        country: String,
      },
      billingAddress: {
        address: String,
        city: String,
        zipcode: String,
        country: String,
      }
    },
    cart: [{
      unitPrice: Number,
      item: String,
      quantity: Number,
    }],
    totalPrice: String,
    currency: String,
    metadata: {
      customerId: Number,
      orderId: Number
    },
    operations: Array,
    companyName: String,
  }
);

module.exports = db.model("Transaction", Schema);
