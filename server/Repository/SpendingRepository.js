const { Sequelize, Op } = require("sequelize");
const { Spending, Account } = require("../sequelize");

class SpendingRepository {
  async GetLastSumOfSpending(date) {
    return await Spending.sum("value", {
      where: {
        date: { [Op.gt]: date },
      },
    });
  }

  async GetSpendingByCategory() {
    return await Spending.findAll({
      attributes: [
        [Sequelize.fn("sum", Sequelize.col("value")), "sum"],
        "category",
      ],
      group: "category",
    });
  }

  async GetSpendingByCategory(accountName) {
    return await Spending.findAll({
      attributes: [
        [Sequelize.fn("sum", Sequelize.col("value")), "sum"],
        "category",
      ],
      where: {
        "$Account.name$": accountName,
      },
      include: [
        {
          model: Account,
          attributes: [],
        },
      ],
      group: "category",
    });
  }

  async GetHistory() {
    return await Spending.findAll({
      attributes: [
        "name",
        "date",
        "value",
        "category",
        [Sequelize.col("Account.name"), "accountName"],
      ],
      include: [
        {
          model: Account,
          attributes: [],
        },
      ],
      order: [["date", "DESC"]],
    });
  }

  async GetHistory(accountName) {
    return await Spending.findAll({
      attributes: { exclude: ["id", "AccountId"] },
      where: {
        "$Account.name$": accountName,
      },
      include: [
        {
          model: Account,
          attributes: [],
        },
      ],
      order: [["date", "DESC"]],
    });
  }

  async Add(spending) {
    let res = null;

    await Spending.create({
      name: spending.name,
      date: spending.date,
      value: spending.value,
      category: spending.category,
      AccountId: spending.accountId,
    }).then((x) => (res = x));

    await Account.update(
      { balance: Sequelize.literal(`balance - ${spending.value}`) },
      {
        where: {
          id: spending.accountId,
        },
      }
    );

    return res;
  }
}

module.exports = new SpendingRepository();
