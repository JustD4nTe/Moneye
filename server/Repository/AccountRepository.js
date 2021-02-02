const { Account } = require("../sequelize");

class AccountRepository {
  async GetAccountsBalance() {
    let balances = await Account.findAll({
      attributes: { exclude: ["id"] },
    });

    balances = balances.map((x) => x.dataValues);

    balances.unshift({ sum: await Account.sum("balance") });

    return balances;
  }
}

module.exports = new AccountRepository();
