#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no". \n');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name} \n`);
let randomNum;
let rightAnswer = 0;
for (let i = 0; i < 3; i += 1) {
  randomNum = Math.round(Math.random() * 100);
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = ((randomNum % 2 === 0)) ? 'yes' : 'no';
  if (correctAnswer === answer) {
    rightAnswer += 1;
    console.log('Correct!');
  } else {
    console.log(`Let's try again, ${name}!`);
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    break;
  }
}
if (rightAnswer === 3) {
  console.log(`Congratulations, ${name}`);
}
