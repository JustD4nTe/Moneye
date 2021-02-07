const { Sequelize, Op } = require("sequelize");
const { Income, Account } = require("../sequelize");

class IncomeRepository {
  async GetLastSumOfIncome(date, accountName) {
    return accountName
      ? await Income.sum("value", {
          where: {
            date: { [Op.gt]: date },
            "$Account.name$": accountName,
          },
          include: [
            {
              model: Account,
              attributes: [],
            },
          ],
        })
      : await Income.sum("value", {
          where: {
            date: { [Op.gt]: date },
          },
        });
  }

  async GetIncomeByDays(accountName) {
    return accountName
      ? await Income.findAll({
          attributes: [
            [Sequelize.fn("sum", Sequelize.col("value")), "Income Value"],
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
        })
      : await Income.findAll({
          attributes: [
            [Sequelize.fn("sum", Sequelize.col("value")), "Income Value"],
            "date",
          ],
          group: "date",
        });
  }

  async GetHistory(accountName) {
    return accountName
      ? await Income.findAll({
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
        })
      : await Income.findAll({
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
