const { Sequelize, DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false, // для предотвращения пустых значений
        unique: true, // Уникальность email
      },
      password: {
        type: DataTypes.STRING(44),
        allowNull: false, // для предотвращения пустых значений
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
      tableName: "user",
    }
  );
};
