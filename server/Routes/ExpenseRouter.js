const express = require("express");
const { Expense } = require("../sequelize");

const router = express.Router();

router.post("/", async (req, res) => {
  Expense.create({
    name: req.body.name,
    date: req.body.date,
    value: req.body.value,
    category: req.body.category,
    AccountId: req.body.accountId,
  }).then((x) => res.json(x));
});

module.exports = router;
