import gameProcess from '../game';
import { random, makeGameGenerator } from '../utils';

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
  const operand1 = random(maxValue);
  const operand2 = random(maxValue);
  const question = `${operand1} ${operand2}`;
  const answer = String(gcd(operand1, operand2));
  return makeGameGenerator(question, answer);
};

export default () => {
  gameProcess(task, gameGenerator);
};
