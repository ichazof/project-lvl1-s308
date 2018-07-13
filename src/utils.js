export const random = maxValue => Math.round(Math.random() * maxValue);

export const gcd = (a, b) => {
  let temp;
  for (let i = 1; i <= smalest(a, b); i += 1) {
    if ((a % i === 0) && (b % i === 0)) {
      temp = i;
    }
  }
  return temp;
};

export const isEven = num => num % 2 === 0;

const smalest = (a, b) => ((a > b) ? b : a);

export const sumOfNumbers = (num) => {
  const count = String(num).length;
  const iter = (number, counter) => {
    if (counter === 1) {
      return number;
    }
    const x = number % 10;
    return x + iter(Math.floor(number / 10), counter - 1);
  };
  return (iter(num, count));
};

export const balance = (num) => {
  const sum = sumOfNumbers(num);
  const len = String(num).length;
  const average = Math.floor(sum / len);
  const rem = sum % len;
  let res = '';
  for (let i = 0; i < len; i += 1) {
    if (i < rem) {
      res = `${res}${average + 1}`;
    } else {
      res = `${average}${res}`;
    }
  }
  return res;
};
