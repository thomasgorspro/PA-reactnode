const express = require("express");
const bcrypt = require("bcryptjs");
const { ValidationError } = require("sequelize");
const { createToken } = require("../lib/auth");
import { generateRandomToken } from "../lib/apiAuth";

const { Merchant, User } = require("../models/sequelize");

const router = express.Router();

// POST
router.post("/login_check", async (req, res) => {
  const { login, password } = req.body;
  Promise.all([
    User.findOne({ where: { username: login }, 
      attributes: ["username", "firstname", "password", "lastname", "createdAt", "role" ] 
    }),
    Merchant.findOne({ where: { email: login, confirmed: true }, attributes: [
        "compagnyName", "KBIS", "currency", "email","password", "createdAt", 
        "phone", "confirmationURL", "redirectionURL",
        'clientToken', 'clientSecret'
    ]})
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
    .then((user) => {
      return createToken({
        user
        }).then((token) => {
          console.log({ token });
          return res.json({ token });
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
  const [clientToken, clientSecret] = new Array(generateRandomToken(), generateRandomToken());
  const Entity = req.headers.entity === 'merchant' ? Merchant : User;
  Entity.create({...req.body, clientToken, clientSecret})
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
