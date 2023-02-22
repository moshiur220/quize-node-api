const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Quiz extends Model {}

Quiz.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "quizs",
  }
);

module.exports = Quiz;
