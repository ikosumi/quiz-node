import {Question, QuizQuestion} from "./types";

export const questions: QuizQuestion[] = [
  {
    question: "What is the capital of France?",
    answer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    answer: new Question(() => {
      return new Promise<string>(resolve => {
        setTimeout(() => resolve("4"), 1000);
      });
    })
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answer: Promise.resolve("William Shakespeare")
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: new Question(() => "Jupiter")
  }
]