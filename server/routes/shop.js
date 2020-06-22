import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
  res.render('index');
})

router.get("/confirm", (req, res) => {
  res.render('confirmedOrder');  
})

export default router;