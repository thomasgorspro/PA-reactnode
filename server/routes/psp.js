import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  setTimeout(() => {
    res.sendStatus(200);
  }, 1000*10);
});

export default router;