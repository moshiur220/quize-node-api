const Quiz = require("../models/Quiz");
const QuizQuestionList = require("../models/QuizQuestionList");

const createQuizList = async (req, res) => {
  const { title, description, questions } = req.body;

  try {
    const quiz = await Quiz.create({ title, description });

    for (let i = 0; i < questions.length; i++) {
      const { name } = questions[i];

      const question = await QuizQuestionList.create({
        name,
        quizId: quiz.id,
      });
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

async function getQuizzesList(req, res) {
  try {
    const List = await Quiz.findAll({
      include: QuizQuestionList,
    });
    // const List = await Quiz.findByPk(quizId, { include: [{ model: Question, as: 'questions' }] });
    res.json(List);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  createQuizList,
  getQuizzesList,
};
