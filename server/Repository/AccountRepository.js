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

  async GetBalance(accountName) {
    return await Account.findOne({
      where: {
        name: accountName,
      },
    });
  }
}

module.exports = new AccountRepository();
