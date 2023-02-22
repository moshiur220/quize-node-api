// models/Question.js
const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const Quiz = require("./Quiz");

const Question = sequelize.define("question", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  questionText: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  isCorrect: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  quizId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Quiz,
      key: "id",
    },
  },
});
Quiz.hasMany(Question);
Question.belongsTo(Quiz);

module.exports = Question;
