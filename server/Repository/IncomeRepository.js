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
}

module.exports = new IncomeRepository();
