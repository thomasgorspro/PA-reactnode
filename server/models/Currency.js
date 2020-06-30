const mongoose = require("mongoose");
const db = require("../lib/mongodb");

const Schema = new mongoose.Schema({
  name: String,
}, {
  collection: 'Currency'
});


const Currency = db.model('Currency', Schema);

module.exports = Currency;