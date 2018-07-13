import gameProcess from '../game';
import { random, makeGameGenerator } from '../utils';

const task = 'Balance the given number.';
const maxValue = 99999;

const sumOfNumbers = (num) => {
  const count = String(num).length;
  const iter = (number, counter) => {
    if (counter === 1) {
      return number;
    }
    const x = number % 10;
    return x + iter(Math.floor(number / 10), counter - 1);
  };
  return (iter(num, count));
};

const balance = (num) => {
  const sum = sumOfNumbers(num);
  const len = String(num).length;
  const average = Math.floor(sum / len);
  const rem = sum % len;
  let res = '';
  for (let i = 0; i < len; i += 1) {
    if (i < rem) {
      res = `${res}${average + 1}`;
    } else {
      res = `${average}${res}`;
    }
  }
  return res;
};

const gameGenerator = () => {
  const operand = random(maxValue);
  const question = `${operand}`;
  const answer = balance(operand);
  return makeGameGenerator(question, answer);
};

export default () => {
  gameProcess(task, gameGenerator);
};
