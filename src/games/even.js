#!/usr/bin/env node
// import { cons } from 'hexlet-pairs';
import gameProcess from '../game';
import { random, makeGameGenerator } from '../utils';

const task = 'Answer "yes" if number even otherwise answer "no".';

const maxValue = 100;

const isEven = num => num % 2 === 0;

const gameGenerator = () => {
  const operand = random(maxValue);
  const question = `${operand}`;
  const answer = (isEven(question)) ? 'yes' : 'no';
  return makeGameGenerator(question, answer);
};

export default () => {
  gameProcess(task, gameGenerator);
};
