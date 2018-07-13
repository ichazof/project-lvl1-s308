import gameProcess from '../game';
import { random, makeGameGenerator } from '../utils';

const task = 'What is the result of the expression?';
const maxValue = 100;
const countOperation = 2;

const gameGenerator = () => {
  const operand1 = random(maxValue);
  const operand2 = random(maxValue);
  const operation = random(countOperation);
  switch (operation) {
    case 0:
      return makeGameGenerator(`'${operand1} + ${operand2}'`, operand1 + operand2);
    case 1:
      return makeGameGenerator(`'${operand1} - ${operand2}'`, operand1 - operand2);
    case 2:
      return makeGameGenerator(`'${operand1} * ${operand2}'`, operand1 * operand2);
    default:
      throw new Error('error');
  }
};

export default () => {
  gameProcess(task, gameGenerator);
};
