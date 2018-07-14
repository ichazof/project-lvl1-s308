import gameProcess from '../game';
import { random, makeGameGenerator } from '../utils';

const task = 'Is this number prime?';
const maxValue = 100;

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameGenerator = () => {
  const operand = random(maxValue);
  const question = `${operand}`;
  const answer = (isPrime(operand)) ? 'yes' : 'no';
  return makeGameGenerator(question, answer);
};

export default () => {
  gameProcess(task, gameGenerator);
};
