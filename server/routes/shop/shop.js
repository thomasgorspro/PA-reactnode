const express = require("express");
const Transaction = require("../../models/mongoose/Transaction");
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

  .get("/orders/:id", (req, res) => {
    Transaction.findById(req.params.id).then((data) => {
        res.render("orderView", { order: data })
    })
  })

  .get("/login", (req, res) => {
    res.render("login");
  });

module.exports = router;