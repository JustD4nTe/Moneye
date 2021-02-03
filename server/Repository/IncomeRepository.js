const { Sequelize, Op } = require("sequelize");
const { Income, Account } = require("../sequelize");

class IncomeRepository {
  async GetLastSumOfIncome(foo) {
    return await Income.sum("value", {
      where: {
        date: { [Op.gt]: foo },
      },
    });
  }

  async GetIncomeByDays() {
    return await Income.findAll({
      attributes: [
        [Sequelize.fn("sum", Sequelize.col("value")), "sum"],
        "date",
      ],
      group: "date",
    });
  }

  async GetIncomeByDays(accountName) {
    return await Income.findAll({
      attributes: [
        [Sequelize.fn("sum", Sequelize.col("value")), "sum"],
        "date",
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
      group: "date",
    });
  }

  async GetHistory() {
    return await Income.findAll({
      attributes: [
        "name",
        "date",
        "value",
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
    return await Income.findAll({
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

  async Add(income) {
    let res = null;

    await Income.create({
      name: income.name,
      date: income.date,
      value: income.value,
      AccountId: income.accountId,
    }).then((x) => (res = x));

    await Account.update(
      { balance: Sequelize.literal(`balance + ${income.value}`) },
      {
        where: {
          id: income.accountId,
        },
      }
    );

    return res;
  }
}

module.exports = new IncomeRepository();
