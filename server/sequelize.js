const Sequelize = require("sequelize");

const AccountModel = require("./Models/Account");
const IncomeModel = require("./Models/Income");
const SpendingModel = require("./Models/Spending");

const sequelize = new Sequelize("Moneye", "user", "pass", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const Account = AccountModel(sequelize);
const Income = IncomeModel(sequelize);
const Spending = SpendingModel(sequelize);

Account.hasMany(Income);
Income.belongsTo(Account);

Account.hasMany(Spending);
Spending.belongsTo(Account);

sequelize
  .sync({ alter: false })
  .then(() => console.log("Database is ready to use!"));

module.exports = {
  Account,
  Income,
  Spending,
};
