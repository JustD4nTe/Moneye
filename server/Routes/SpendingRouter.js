const express = require("express");
const { Spending } = require("../sequelize");

const router = express.Router();

router.post("/", async (req, res) => {
  Spending.create({
    name: req.body.name,
    date: req.body.date,
    value: req.body.value,
    category: req.body.category,
    AccountId: req.body.accountId,
  }).then((x) => res.json(x));
});

module.exports = router;
