const { Op } = require("sequelize");
const { Income } = require("../sequelize");

class IncomeRepository {
  async GetLastSumOfIncome(foo) {
    return await Income.sum("value", {
      where: {
        date: { [Op.gt]: foo },
      },
    });
  }
}

module.exports = new IncomeRepository();
