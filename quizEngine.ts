import {Answerable, Question} from "./types";

export class QuizEngine {
  static async processAnswer<T>(answerable: Answerable<T>): Promise<T> {
    if (answerable instanceof Question) {
      const result = await answerable.getAnswer();
      return result instanceof Promise ? await result : result;
    } else if (answerable instanceof Promise) {
      return await answerable;
    } else {
      return answerable;
    }
  }

  static async askQuestion(question: string, answer: Answerable<string>): Promise<boolean> {
    console.log(question);
    const userAnswer = await new Promise<string>(resolve => {
      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      readline.question('Your answer: ', (ans: string) => {
        readline.close();
        resolve(ans.trim().toLowerCase());
      });
    });

    const correctAnswer = await this.processAnswer(answer);
    const isCorrect = userAnswer === correctAnswer.toLowerCase();
    console.log(isCorrect ? 'Correct!' : `Wrong. The correct answer is: ${correctAnswer}`);
    return isCorrect;
  }
}