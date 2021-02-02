const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Spending",
    {
      name: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATEONLY,
      },
      value: {
        type: DataTypes.DECIMAL(12, 2),
      },
      category: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
