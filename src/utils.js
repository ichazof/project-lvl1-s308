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
