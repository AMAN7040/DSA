//ARMSTRONG NUMBER
// check wheather the given number is Armstrong number or not.
// Example => number 371 = 3^3 + 7^3 + 1^3, if both equal them it is a armstrong number.

const armstrong = (num) => {
  if (num < 0) return false;

  let sum = 0;
  const originalNum = num;
  const numDigits = num.toString().length;

  while (num > 0) {
    let lastDigit = num % 10;
    sum += lastDigit ** numDigits;
    num = Math.floor(num / 10);
  }

  return originalNum === sum;
};

const num = 370;
console.log(armstrong(num));
