// Exercise 6: Generate TypeScript code
// npm run exercise-6
// ---
// Write a prompt and execute it using client.chat.completions API
// to generate TypeScript code for email sending.
// Use nodemailer.
// Make sure it has error handling.
// The code might not work and that is OK.

import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
