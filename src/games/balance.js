
import { cons } from 'hexlet-pairs';
import gameProcess from '../game';
import { random, balance } from '../utils';

const task = 'Balance the given number.';
const maxValue = 99999;

const createQuestion = () => {
  const operand1 = random(maxValue);
  const question = `${operand1}`;
  const answer = balance(operand1);
  return cons(question, answer);
};

export default () => {
  const game = cons(task, createQuestion);
  gameProcess(game);
};
