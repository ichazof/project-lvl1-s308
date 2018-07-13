import { cons, car, cdr } from 'hexlet-pairs';

export const random = maxValue => Math.round(Math.random() * maxValue);

export const makeGameGenerator = (question, answer) => cons(question, answer);
export const getQuestion = gameGenerator => car(gameGenerator);
export const getAnswer = gameGenerator => cdr(gameGenerator);
