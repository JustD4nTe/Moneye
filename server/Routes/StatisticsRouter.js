const express = require("express");
const spendingRepo = require("../Repository/SpendingRepository");
const incomeRepo = require("../Repository/IncomeRepository");

const router = express.Router();

router.get("/", async (req, res) => {
  const incomeByDays = await incomeRepo.GetIncomeByDays();
  const spendingByCategory = await spendingRepo.GetSpendingByCategory();

  res.json({
    incomeByDays: incomeByDays,
    spendingByCategory: spendingByCategory,
  });
});

module.exports = router;
