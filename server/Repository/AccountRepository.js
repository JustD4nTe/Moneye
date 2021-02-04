const { Account } = require("../sequelize");

class AccountRepository {
  async GetAccountsBalance() {
    let balances = await Account.findAll({
      attributes: { exclude: ["id"] },
    });

    return balances.map((x) => x.dataValues);
  }

  async GetSumOfBalance() {
    return await Account.sum("balance");
  }

  async GetBalance(accountName) {
    return await Account.findOne({
      where: {
        name: accountName,
      },
    });
  }
}

module.exports = new AccountRepository();
