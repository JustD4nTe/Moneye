const express = require("express");
const { Sequelize } = require("sequelize");
const incomeRepository = require("../Repository/IncomeRepository");
const { Income, Account } = require("../sequelize");

const router = express.Router();

router.get("/", async (req, res) => {
  const incomeByDays = await incomeRepository.GetIncomeByDays();
  const historyOfIncome = await incomeRepository.GetHistory();
  
  res.json({
    incomeByDays: incomeByDays,
    history: historyOfIncome
  });
});

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
