#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;

export default () => {
  console.log('Welcome to the Brain Games! \n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  console.log('Answer "yes" if number even otherwise answer "no". \n');
  const step = 3;
  for (let i = 0; i < step; i += 1) {
    const question = Math.round(Math.random() * 100);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = (isEven(question)) ? 'yes' : 'no';
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${name}!`);
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};
