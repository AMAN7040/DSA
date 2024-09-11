//The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

const fact = (n) => {
  if (n <= 1) return n;

  return fact(n - 1) + fact(n - 2);
};

const n = 5;
console.log(fact(n));
