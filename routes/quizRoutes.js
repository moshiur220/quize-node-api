const express = require("express");
const router = express.Router();
const QuizController = require("../controllers/QuizController");
const QuizAnswerListController = require("../controllers/QuizAnswerListController");

router.post("/", QuizController.createQuiz);
router.post("/add", QuizAnswerListController.createQuizList);
router.get("/", QuizController.getQuizzes);
router.get("/list", QuizAnswerListController.getQuizzesList);

module.exports = router;
