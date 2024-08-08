# Simple Quiz Game

This project demonstrates a simple quiz game implemented in TypeScript, showcasing the use of the `Answerable<T>` type
for handling both synchronous and asynchronous operations.

## Project Structure

- `types.ts`: Defines core types and interfaces used in the project.
- `questions.ts`: Contains the quiz questions and their answers.
- `quizEngine.ts`: Implements the quiz logic, including processing answers and asking questions.
- `index.ts`: The main entry point that runs the quiz.
- `package.json`: Project configuration and dependencies.
- `tsconfig.json`: TypeScript configuration.

## Features

- Handles different types of answers: immediate, promised, and wrapped in Question objects.
- Demonstrates both synchronous and asynchronous answer processing.
- Simple command-line interface for answering questions.

## Prerequisites

- Node.js
- npm

## Installation

```shell
npm install
```

## Running the Quiz

```shell
npm start
```

## Building the project

```shell
npm run build
```

## License

This project is open-source and available under the MIT License.

## About

This project was created to demonstrate the use of TypeScript's advanced types and asynchronous programming in a simple,
interactive application.
