import { cons } from 'hexlet-pairs';
import gameProcess from '../game';
import { random } from '../utils';

const task = 'Find the greatest common divisor of given numbers.';
const maxValue = 100;
const gcd = (a, b) => {
  let temp;
  for (let i = 1; i <= smalest(a, b); i += 1) {
    if ((a % i === 0) && (b % i === 0)) {
      temp = i;
    }
  }
  return temp;
};

const smalest = (a, b) => ((a > b) ? b : a);
const gameGenerator = () => {
  const num1 = random(maxValue);
  const num2 = random(maxValue);
  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));
  return cons(question, answer);
};

export default () => {
  gameProcess(task, gameGenerator);
};
