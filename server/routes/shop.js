const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();

router
  .get("/", (req, res) => {
    res.render("index");
  })

  .get("/confirm", (req, res) => {
    res.render("confirmedOrder");
  })

  // CGET all transactions
  .get("/orders", (req, res) => {
    Transaction.find(req.query).then((data) => {
      res.render("ordersList", { orders: data });
    });
  })

  .get("/login", (req, res) => {
    res.render("login");
  })

module.exports = router;