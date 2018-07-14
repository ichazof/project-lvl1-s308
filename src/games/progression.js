import { cons } from 'hexlet-pairs';
import gameProcess from '../game';
import { random } from '../utils';

const lenOfProgression = 10;
const task = 'What number is missing in this progression?';
const maxStartMember = 50;
const maxStep = 30;
const gameGenerator = () => {
  const startMember = random(maxStartMember);
  const step = random(maxStep);
  const randomPosition = random(10);
  let progression = '';
  let answer = 0;
  for (let i = 1; i <= lenOfProgression; i += 1) {
    if (i === randomPosition) {
      progression += '.. ';
      answer = startMember + (i * step);
    } else {
      progression += `${startMember + (i * step)} `;
    }
  }
  return cons(progression, answer);
};

export default () => {
  gameProcess(task, gameGenerator);
};
