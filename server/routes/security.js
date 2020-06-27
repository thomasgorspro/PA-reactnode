const express = require("express");
const bcrypt = require("bcryptjs");
const { createToken } = require("../lib/auth");
const Merchant = require("../models/sequelize/Merchant");

const router = express.Router();

// POST
router.post("/login_check", (req, res) => {
  const { email, password } = req.body;

  Merchant.findOne({
    where: { email, confirmed: true },
  })
    .then((data) => {
      if (!data) {
        return Promise.reject("invalid");
      } else {
        return bcrypt.compare(password, data.password).then((valid) => {
          if (!valid) {
            return Promise.reject("invalid");
          } else {
            return Promise.resolve(data);
          }
        });
      }
    })
    .then((merchant) =>
      createToken({ email: merchant.email}).then((token) => {
          console.log({ token });
          return res.json({ token })
      }
      )
    )
    .catch((err) =>
      err === "invalid"
        ? res.status(400).json({
            username: "Invalid or yet to be validated credentials",
            password: "Invalid or yet to be validated credentials",
          })
        : console.error(err) || res.sendStatus(500)
    );
});

// POST
router.post("/merchant", (req, res) => {
  Merchant.create(req.body)
    .then((data) => res.status(201).json(data))
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
