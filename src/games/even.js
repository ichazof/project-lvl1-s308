#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import gameProcess from '../game';
import { random } from '../utils';

const task = 'Answer "yes" if number even otherwise answer "no".';

const maxValue = 100;

const isEven = num => num % 2 === 0;

const gameGenerator = () => {
  const randomNum = random(maxValue);
  const question = `${randomNum}`;
  const answer = (isEven(question)) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  gameProcess(task, gameGenerator);
};
