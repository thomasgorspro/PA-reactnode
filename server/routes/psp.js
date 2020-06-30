const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  setTimeout(() => {
    res.sendStatus(200);
  }, 1000*10);
});

module.exports = router;