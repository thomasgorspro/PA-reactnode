const express = require("express");
const Transaction = require("../models/mongoose/Transaction");

const router = express.Router();

router
  // GET all operations of a transaction
  .get("/", (req, res) => {})

  // GET an operation of a transaction
  .get("/:id_op", (req, res) => {})

  // POST an operation
  .post("/", (req, res) => {
    console.log(req.body)
  });

  module.exports = router;