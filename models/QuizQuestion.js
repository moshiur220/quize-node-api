const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class QuizQuestion extends Model {}

QuizQuestion.init(
  {
    quizId: {
      type: DataTypes.INTEGER,
      references: {
        model: "quizs",
        key: "id",
      },
    },
    questionId: {
      type: DataTypes.INTEGER,
      references: {
        model: "questions",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "quiz_question",
  }
);

module.exports = QuizQuestion;
