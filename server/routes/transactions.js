const express = require("express");
const Transaction = require("../models/mongoose/Transaction");

const router = express.Router();

router
  // CGET all transactions
  .get("/", (req, res) => {
    Transaction.find(req.query).then((data) => res.json(data));
  })

  // POST a transaction
  .post("/", (req, res) => {
    const transaction = new Transaction(req.body);
    transaction
      .save()
      .then((data) =>
        res.status(201).json({ transaction, redirectUrl: "http://localhost:3000/payment" })
      );
  })

  // GET a transaction
  .get("/:id", (req, res) => {
    Transaction.findById(req.params.id).then((data) => res.json(data));
  })

  // DELETE a transaction
  .delete("/:id", (req, res) => {
    Transaction.findByIdAndDelete(req.params.id).then(() =>
      res.sendStatus(204)
    );
  })

  // GET all operations of a transaction
  .get("/:id/operations", (req, res) => {})

  // GET an operation of a transaction
  .get("/:id/operations/:id_op", (req, res) => {});

module.exports = router;
