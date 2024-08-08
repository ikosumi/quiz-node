import {questions} from "./questions";
import {QuizEngine} from "./quizEngine";

async function runQuiz() {
  let score = 0;
  for (const q of questions) {
    const correct = await QuizEngine.askQuestion(q.question, q.answer);
    if (correct) score++;
  }
  console.log(`Quiz complete! Your score: ${score}/${questions.length}`);
}

runQuiz().catch(console.error);
