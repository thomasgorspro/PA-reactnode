const express = require("express");
const bcrypt = require("bcryptjs");
const { ValidationError } = require("sequelize");
const { createToken } = require("../lib/auth");

const { Merchant, User } = require("../models/sequelize");

const router = express.Router();

// POST
router.post("/login_check", async (req, res) => {
  const { login, password } = req.body;
  Promise.all([
    User.findOne({ where: { username: login } }),
    Merchant.findOne({ where: { email: login, confirmed: true } })
  ])
  .then((entities) => {
    const entity = entities[0] || entities[1];
      if (!entity) {
        return Promise.reject("invalid");
      } else {
        return bcrypt.compare(password, entity.password).then((valid) => {
          if (!valid) {
            return Promise.reject("invalid");
          } else {
            return Promise.resolve(entity);
          }
        });
      }
    })
    .then((entity) => {
      const login = entity.compagnyName || entity.username; 
      console.log(login, 'server');
      return createToken({ 
        login
        }).then((token) => {
          console.log({ token });
          return res.json({ token, isMerchant: !!entity.KBIS });
      })
    })
    .catch((err) =>
    err === "invalid"
        ? res.status(400).json({
          errors: {
            login: "Invalid or yet to be validated credentials"
          }})
        : console.error(err) || res.sendStatus(500)
    );
});

// POST
router.post("/register", (req, res) => {
  const Entity = req.headers.entity === 'merchant' ? Merchant : User;
  Entity.create(req.body)
    .then((data) => res.status(201).json({ data }))
    .catch((error) => {
      if (error instanceof ValidationError) {
        const errors = error.errors.reduce((acc, item) => {
          acc[item.path] = [...(acc[item.path] || []), item.message];
          return acc;
        }, {});
        res.status(400).json({ errors });
      } else {
        res.sendStatus(500);
      }
    });
});
module.exports = router;
