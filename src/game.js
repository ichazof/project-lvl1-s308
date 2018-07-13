import readlineSync from 'readline-sync';
// import { car, cdr } from 'hexlet-pairs';
import { getQuestion, getAnswer } from './utils';

const steps = 3;

const gameProcess = (task, gameGenerator) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}\n`);

  for (let i = 0; i < steps; i += 1) {
    const questionPair = gameGenerator();
    const question = getQuestion(questionPair);
    const correctAnswer = String(getAnswer(questionPair));
    const answer = readlineSync.question(`Question: ${question} \nYou answer: `);
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameProcess;
