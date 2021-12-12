const express = require("express");
const router = express.Router();

const QuizController = require("../controller/quiz");

/* Rotas Para Quiz */
router
  .get("/list/quiz", QuizController.index)
  .get("/quiz/:page", QuizController.search)
  .post("/create/quiz", QuizController.create)
  .put("/update/quiz/:id", QuizController.update)
  .delete("/delete/quiz/:id", QuizController.delete);

module.exports = router;