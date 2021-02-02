const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Account",
    {
      name: {
        type: DataTypes.STRING,
      },
      balance: {
        type: DataTypes.DECIMAL(12, 2),
      },
    },
    {
      timestamps: false,
    }
  );
};
