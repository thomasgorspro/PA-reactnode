import mongoose from "mongoose";
import db from "../lib/db";

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
    Shipping: String,
    ShoppingCart: Array,
    Price: String
  }
);

export const Transaction = db.model("Transaction", Schema);