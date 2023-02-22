const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Quiz = require("./Quiz");
class QuizQuestionList extends Model {}

QuizQuestionList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quizId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Quiz,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "quiz_question_list",
  }
);
Quiz.hasMany(QuizQuestionList);
QuizQuestionList.belongsTo(Quiz);
module.exports = QuizQuestionList;
