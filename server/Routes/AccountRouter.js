const express = require("express");
const accountRepo = require("../Repository/AccountRepository");
const spendingRepo = require("../Repository/SpendingRepository");
const incomeRepo = require("../Repository/IncomeRepository");

const router = express.Router();

router.get("/", async (req, res) => {
    let history = await spendingRepo.GetHistory(req.body.accountName);
    
    history = history.concat(await incomeRepo.GetHistory(req.body.accountName));
    // order by desc
    history.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    const balance = await accountRepo.GetBalance(req.body.accountName);
    const incomeByDays = await incomeRepo.GetIncomeByDays(req.body.accountName);
    const spendingByCategory = await spendingRepo.GetSpendingByCategory(req.body.accountName);

  res.json({
    balance: balance,
    history: history,
    incomeByDays: incomeByDays,
    spendingByCategory: spendingByCategory,
  });
});

module.exports = router;
