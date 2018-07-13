import { cons, cdr, car } from 'hexlet-pairs';
import gameProcess from '../game';
import { random } from '../utils';

const task = 'What is the result of the expression?';
const maxValue = 100;
const countOperation = 2;

const getOperator = () => {
  const operation = random(countOperation);
  switch (operation) {
    case 0:
      return cons('+', (operand1, operand2) => operand1 + operand2);
    case 1:
      return cons('-', (operand1, operand2) => operand1 - operand2);
    case 2:
      return cons('*', (operand1, operand2) => operand1 * operand2);
    default:
      throw new Error('error');
  }
};

const createQuestion = () => {
  const operator = getOperator();
  const operation = cdr(operator);
  const operand1 = random(maxValue);
  const operand2 = random(maxValue);
  const question = `${operand1} ${car(operator)} ${operand2}`;
  const answer = String(operation(operand1, operand2));
  return cons(question, answer);
};

export default () => {
  const game = cons(task, createQuestion);
  gameProcess(game);
};
