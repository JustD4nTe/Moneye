const express = require("express");
const incomeRepository = require("../Repository/IncomeRepository");

const router = express.Router();

router.get("/", async (req, res) => {
  const incomeByDays = await incomeRepository.GetIncomeByDays();
  const historyOfIncome = await incomeRepository.GetHistory();
  historyOfIncome.reverse();

  res.json({
    incomeByDays: incomeByDays,
    history: historyOfIncome,
  });
});

router.post("/", async (req, res) => {
  res.json(await incomeRepository.Add(req.body));
});

module.exports = router;
