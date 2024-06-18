const { Sequelize, DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "Authkey",
    {
      authkey: {
        type: DataTypes.STRING(44),
        primaryKey: true,
      },
      userid: {
        type: DataTypes.INTEGER(),
        autoIncrement: true,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW, // Используется текущая дата и время
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW, // Используется текущая дата и время
      },
    },
    {
      timestamp: false,
      underscored: true, // Использование snake_case для имен полей
      tableName: "authkey",
    }
  );
};
