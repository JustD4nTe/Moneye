const { Sequelize, Op } = require("sequelize");
const { Spending } = require("../sequelize");

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
}

module.exports = new SpendingRepository();
