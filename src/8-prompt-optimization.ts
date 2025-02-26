// Exercise 8: Select techniques for Prompt optimization and execute them
// npm run exercise-8
// ---
// In the course, we have talked about many different techniques to get
// the best response from the LLMs.
// Select 2-3 techniques and implement them below to build on top of the
// previous quiz exercise (you can copy over the code from the previous
// exercise).
// They can be either a little bit advanced, like Maieutic Prompting,
// Self-Refinement or Least-to-Most Prompting.
//
// Optional: could you ask the model to provide its answers in a specific
//  JSON format that you can parse later into a JS object?
//
// Optional Advanced: Read about structured outputs:
//  https://openai.com/index/introducing-structured-outputs-in-the-api/
// Try to add a Zod schema with OpenAI Zod helpers to provide a structure
// and validate the output.

import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
