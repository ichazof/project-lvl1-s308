import { cons } from 'hexlet-pairs';
import gameProcess from '../game';
import { random, gcd } from '../utils';

const task = 'Find the greatest common divisor of given numbers.';
const maxValue = 100;

const createQuestion = () => {
  const operand1 = random(maxValue);
  const operand2 = random(maxValue);
  const question = `${operand1} ${operand2}`;
  const answer = String(gcd(operand1, operand2));
  return cons(question, answer);
};

export default () => {
  const game = cons(task, createQuestion);
  gameProcess(game);
};
