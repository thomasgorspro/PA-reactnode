const express = require("express");
const { Merchant } = require("../models/sequelize");
const { ValidationError } = require("sequelize");
const { generateRandomToken } = require("../lib/apiAuth");
const { createToken } = require("../lib/auth");

const router = express.Router();

// // CGET
router.get("/", (req, res) => {
  Merchant.findAll({
    where: req.query,
    attributes: [
      "id",
      "compagnyName",
      "KBIS",
      "currency",
      "email",
      "phone",
      "confirmationURL",
      "redirectionURL",
      "confirmed",
      "clientToken",
      "clientSecret",
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
  Merchant.findByPk(req.params.id)
    .then((data) => (data ? res.json(data) : res.sendStatus(404)))
    .catch(() => res.sendStatus(500));
});

// Update credentials
router.put("/:id/credentials", (req, res) => {
  const [clientToken, clientSecret] = new Array(
    generateRandomToken(),
    generateRandomToken()
  );
  Merchant.update(
    { clientToken, clientSecret },
    {
      returning: true,
      where: { id: req.params.id },
    }
  )
    .then((user) =>
      createToken({
        user: user[1][0],
      }).then((token) => {
        console.log({ token });
        return res.json({ token });
      })
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
