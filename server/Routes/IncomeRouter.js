const express = require("express");
const { Income } = require("../sequelize");

const router = express.Router();

router.post("/", async (req, res) => {
  Income.create({
    name: req.body.name,
    date: req.body.date,
    value: req.body.value,
    AccountId: req.body.accountId,
  }).then((x) => res.json(x));
});

module.exports = router;
