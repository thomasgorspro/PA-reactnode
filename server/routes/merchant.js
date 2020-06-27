import express from "express";
import Merchant from "../models/sequelize/Merchant";
import { ValidationError } from "sequelize";

const router = express.Router();


// // CGET
router.get("/", (req, res) => {
  Merchant.findAll({
    where: req.query,
    attributes: [
        "name", "KBIS", "currency", "email", 
        "phone", "confirmationURL", "redirectionURL", "confirmed"
    ],
  })
    .then((data) => res.json(data))
    .catch((error) => {
      if (error instanceof ValidationError) {
        const errors = error.errors.reduce((acc, item) => {
          acc[item.path] = [...(acc[item.path] || []), item.message];
          return acc;
        }, {});
        res.status(400).json(errors);
      } else {
        res.sendStatus(500);
      }
    });
});

// GET
router.get("/:id", (req, res) => {
  User.findByPk(req.params.id)
    .then((data) => (data ? res.json(data) : res.sendStatus(404)))
    .catch(() => res.sendStatus(500));
});

// PUT
router.put("/:id", (req, res) => {
  Merchant.update(req.body, {
    returning: true,
    where: { id: req.params.id },
  })
    .then(([nbUpdated, result]) =>
      nbUpdated ? res.json(result[0]) : res.sendStatus(404)
    )
    .catch((error) => {
      if (error instanceof ValidationError) {
        const errors = error.errors.reduce((acc, item) => {
          acc[item.path] = [...(acc[item.path] || []), item.message];
          return acc;
        }, {});
        res.status(400).json(errors);
      } else {
        res.sendStatus(500);
      }
    });
});

// DELETE
router.delete("/:id", (req, res) => {
  Merchant.destroy({
    where: { id: req.params.id },
  })
    .then((data) => (data ? res.sendStatus(204) : res.sendStatus(404)))
    .catch((error) => {
      if (error instanceof ValidationError) {
        const errors = error.errors.reduce((acc, item) => {
          acc[item.path] = [...(acc[item.path] || []), item.message];
          return acc;
        }, {});
        res.status(400).json(errors);
      } else {
        res.sendStatus(500);
      }
    });
});

module.exports = router;
