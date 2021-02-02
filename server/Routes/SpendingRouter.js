const express = require("express");
const { Sequelize } = require("sequelize");
const { Spending, Account } = require("../sequelize");

const router = express.Router();

router.post("/", async (req, res) => {
  await Spending.create({
    name: req.body.name,
    date: req.body.date,
    value: req.body.value,
    category: req.body.category,
    AccountId: req.body.accountId,
  }).then((x) => res.json(x));

  await Account.update(
    { balance: Sequelize.literal(`balance - ${req.body.value}`) },
    {
      where: {
        id: req.body.accountId,
      },
    }
  );
});

module.exports = router;
