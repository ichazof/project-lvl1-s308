#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import gameProcess from '../game';
import { random, isEven } from '../utils';

const task = 'Answer "yes" if number even otherwise answer "no".';
const maxValue = 100;

const createQuestion = () => {
  const operand1 = random(maxValue);
  const question = `${operand1}`;
  const answer = (isEven(question)) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  const game = cons(task, createQuestion);
  gameProcess(game);
};
