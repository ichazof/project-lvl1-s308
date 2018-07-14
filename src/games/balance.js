import { cons } from 'hexlet-pairs';
import gameProcess from '../game';
import { random } from '../utils';

const task = 'Balance the given number.';
const maxValue = 99999;

const sumOfNumbers = (num) => {
  const count = String(num).length;
  const iter = (number, counter) => {
    if (counter === 1) {
      return number;
    }
    const remainder = number % 10;
    return remainder + iter(Math.floor(number / 10), counter - 1);
  };
  return (iter(num, count));
};

const balance = (num) => {
  const sum = sumOfNumbers(num);
  const lengthOfString = String(num).length;
  const average = Math.floor(sum / lengthOfString);
  const remainder = sum % lengthOfString;
  let resault = '';
  for (let i = 0; i < lengthOfString; i += 1) {
    if (i < remainder) {
      resault = `${resault}${average + 1}`;
    } else {
      resault = `${average}${resault}`;
    }
  }
  return resault;
};

const gameGenerator = () => {
  const randomNum = random(maxValue);
  const question = `${randomNum}`;
  const answer = balance(randomNum);
  return cons(question, answer);
};

export default () => {
  gameProcess(task, gameGenerator);
};
