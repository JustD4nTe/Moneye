const express = require("express");
const accountRepo = require("../Repository/AccountRepository");
const spendingRepo = require("../Repository/SpendingRepository");
const incomeRepo = require("../Repository/IncomeRepository");

const router = express.Router();

router.get("/", async (req, res) => {
  const balance = await accountRepo.GetAccountsBalance();
  const accountAmount = await accountRepo.GetSumOfBalance();

  const d = new Date();
  // get date 7 days ago
  d.setDate(d.getDate() - 7);
  const last7daysSpending = await spendingRepo.GetLastSumOfSpending(
    d.toISOString()
  );
  const last7daysIncome = await incomeRepo.GetLastSumOfIncome(d.toISOString());

  const last7days = {
    spending: last7daysSpending,
    income: last7daysIncome,
    balance: last7daysIncome - last7daysSpending,
  };

  // get date 30 days ago (variable d is already 7 days ago)
  d.setDate(d.getDate() - 23);
  const last30daysSpending = await spendingRepo.GetLastSumOfSpending(
    d.toISOString()
  );
  d.setDate(d.getDate() - 23);
  const last30daysIncome = await incomeRepo.GetLastSumOfIncome(d.toISOString());

  const last30days = {
    spending: last30daysSpending,
    income: last30daysIncome,
    balance: last30daysIncome - last30daysSpending,
  };

  const spendingByCategory = await spendingRepo.GetSpendingByCategory();

  res.json({
    last30days: last30days,
    last7days: last7days,
    balance: balance,
    accountAmount: accountAmount,
    spendingByCategory: spendingByCategory,
  });
});

module.exports = router;
