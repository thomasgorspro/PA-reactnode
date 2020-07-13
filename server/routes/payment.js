const express = require("express");
const Transaction = require("../models/mongoose/Transaction");
const fetch = require("node-fetch");

const router = express.Router();

router
  .get("/:id", (req, res) => {
    Transaction.findById(req.params.id)
      .then((data) => {
        res.render("payment", {
          transaction: data,
          paymentId: req.params.id,
        });
      })
      .catch((e) => res.json({ message: e.message }));
  })

  .post("/:id", (req, res) => {
    Transaction.findById(req.params.id).then(() =>
      fetch("http://localhost:3000/psp").then((data) => res.send(data))
    );
  });

module.exports = router;
