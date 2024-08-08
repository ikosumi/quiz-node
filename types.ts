export class Question<T> {
  constructor(private answerFn: () => T | Promise<T>) {
  }

  async getAnswer(): Promise<T> {
    return this.answerFn();
  }
}

export type Answerable<T> = Question<Promise<T>> | Question<T> | Promise<T> | T;

export interface QuizQuestion {
  question: string;
  answer: Answerable<string>
}