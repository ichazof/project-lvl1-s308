import { cons } from 'hexlet-pairs';
import gameProcess from '../game';
import { random } from '../utils';

const task = 'Is this number prime?';
const maxValue = 100;

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const finalDivisor = Math.sqrt(num);
  for (let i = 2; i <= finalDivisor; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameGenerator = () => {
  const randomNum = random(maxValue);
  const question = `${randomNum}`;
  const answer = (isPrime(randomNum)) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  gameProcess(task, gameGenerator);
};
