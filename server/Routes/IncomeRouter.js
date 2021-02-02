const express = require("express");
const { Sequelize } = require("sequelize");
const { Income, Account } = require("../sequelize");

const router = express.Router();

router.post("/", async (req, res) => {
  await Income.create({
    name: req.body.name,
    date: req.body.date,
    value: req.body.value,
    AccountId: req.body.accountId,
  }).then((x) => res.json(x));

  await Account.update(
    { balance: Sequelize.literal(`balance + ${req.body.value}`) },
    {
      where: {
        id: req.body.accountId,
      },
    }
  );
});

module.exports = router;
