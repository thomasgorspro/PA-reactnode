const express = require('express');
const { Merchant } = require('../models/sequelize');
const { ValidationError } = require("sequelize");

const router = express.Router();
// PUT
router.put("/validate_merchant/:id", (req, res) => {
    const clientToken = "clientToken";
    const clientSecret = "clientSecret";
    Merchant.update({ confirmed: true, clientToken, clientSecret },
        { where: { id: req.params.id }
    })
    .then(([nbUpdated, result]) =>
        nbUpdated ? res.json({ result, nbUpdated }) : res.sendStatus(404)
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

router.put("/merchant/:id", (req, res) => {
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
  
module.exports = router;