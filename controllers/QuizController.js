const Quiz = require("../models/Quiz");
const Question = require("../models/Question");
const QuizQuestion = require("../models/QuizQuestion");

const createQuiz = async (req, res) => {
  const { id, questions } = req.body;

  try {
    const quiz = await Quiz.findByPk(id);
    if (quiz) {
      for (let i = 0; i < questions.length; i++) {
        const { questionText, isCorrect } = questions[i];

        const question = await Question.create({
          questionText,
          isCorrect,
          quizId: quiz.id,
        });

        await QuizQuestion.create({
          quizId: quiz.id,
          questionId: question.id,
        });
      }
    } else {
      return res.status(404).json({ error: "Quiz not found" });
    }

    res.status(201).json({
      success: true,
      message: "Quiz created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server",
    });
  }
};

async function getQuizzes(req, res) {
  try {
    const quizzes = await Quiz.findAll({
      include: Question,
    });
    res.json(quizzes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  createQuiz,
  getQuizzes,
};
