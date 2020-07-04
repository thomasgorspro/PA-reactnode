import express from "express";
import { Transaction } from "../models/Transaction";
import fetch from "node-fetch";

const router = express.Router();

router
  .get("/", (req, res) => {
    res.render("payment");
  })

  .post("/", (req, res) => {
    // Transaction.findById(req.params.id).then((data) => res.json(data));
    fetch("http://localhost:3000/psp").then((data) => res.send(data));
  });

export default router;
