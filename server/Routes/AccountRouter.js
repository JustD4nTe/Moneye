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
  const spendingByCategory = await spendingRepo.GetSpendingByCategory(accountName);

  res.json({
    balance: balance,
    history: history,
    incomeByDays: incomeByDays,
    spendingByCategory: spendingByCategory,
  });
});

module.exports = router;
