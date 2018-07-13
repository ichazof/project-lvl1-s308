import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const steps = 3;
const gameProcess = (game) => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${name}\n`);
  const task = car(game);
  const questionPairGenerator = cdr(game);
  console.log(task);
  for (let i = 0; i < steps; i += 1) {
    const questionPair = questionPairGenerator();
    const question = car(questionPair);
    const correctAnswer = cdr(questionPair);
    const answer = readlineSync.question(`Question: ${question} \nYou answer: `);
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default gameProcess;
