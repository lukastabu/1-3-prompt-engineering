// Exercise 7: Generate a Quiz
// npm run exercise-7
// ---
// During a holiday celebration, your family decided to play a quiz game.
// But you don't have any questions for the quiz.
// Ask ChatGPT to create 10 questions from X, Y, Z topics in a specific
// format that you will define (it can use A, B, C, D or something else).
// Print the questions to the console.

import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
