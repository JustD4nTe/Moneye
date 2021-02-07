const express = require("express");
const spendingRepo = require("../Repository/SpendingRepository");

const router = express.Router();

router.get("/", async (req, res) => {
  const spendingByCategory = await spendingRepo.GetSpendingByCategory();
  const historyOfSpending = await spendingRepo.GetHistory();
  historyOfSpending.reverse();

  res.json({
    spendingByCategory: spendingByCategory,
    history: historyOfSpending,
  });
});

router.post("/", async (req, res) => {
  res.json(await spendingRepo.Add(req.body));
});

module.exports = router;
