const mongoose = require("mongoose");
const db = require('../../lib/mongoose');

const Schema = new mongoose.Schema({
  name: String,
}, {
  collection: 'Currency'
});



module.exports = db.model("Currency", Schema);