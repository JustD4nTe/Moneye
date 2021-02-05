const express = require("express");
const accountRepo = require("../Repository/AccountRepository");
const spendingRepo = require("../Repository/SpendingRepository");
const incomeRepo = require("../Repository/IncomeRepository");

const router = express.Router();

router.get("/", async (req, res) => {
  const accountName = req.query.accountName;
  let history = await spendingRepo.GetHistory(accountName);

  history = history.concat(await incomeRepo.GetHistory(accountName));
  // order by desc
  history.sort((a, b) => new Date(b.date) - new Date(a.date));

  const balance = await accountRepo.GetBalance(accountName);
  const incomeByDays = await incomeRepo.GetIncomeByDays(accountName);
  const spendingByCategory = await spendingRepo.GetSpendingByCategory(
    accountName
  );

  const d = new Date();
  // get date 7 days ago
  d.setDate(d.getDate() - 7);
  const last7daysSpending = await spendingRepo.GetLastSumOfSpending(
    d.toISOString(),
    accountName
  );
  const last7daysIncome = await incomeRepo.GetLastSumOfIncome(
    d.toISOString(),
    accountName
  );

  const last7days = {
    spending: last7daysSpending,
    income: last7daysIncome,
    balance: last7daysIncome - last7daysSpending,
  };

  // get date 30 days ago (variable d is already 7 days ago)
  d.setDate(d.getDate() - 23);
  const last30daysSpending = await spendingRepo.GetLastSumOfSpending(
    d.toISOString(),
    accountName
  );
  d.setDate(d.getDate() - 23);
  const last30daysIncome = await incomeRepo.GetLastSumOfIncome(
    d.toISOString(),
    accountName
  );

  const last30days = {
    spending: last30daysSpending,
    income: last30daysIncome,
    balance: last30daysIncome - last30daysSpending,
  };

  res.json({
    balance: balance,
    history: history,
    incomeByDays: incomeByDays,
    spendingByCategory: spendingByCategory,
    last7days: last7days,
    last30days: last30days,
  });
});

module.exports = router;
