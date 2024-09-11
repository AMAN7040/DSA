// --------Reverse Integer--------
// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

var reverse = function (x) {
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  let reverseNum = 0;
  const sign = x > 0 ? 1 : -1;
  let num = Math.abs(x);

  while (num !== 0) {
    let lastDigit = num % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  reverseNum *= sign;

  if (reverseNum < INT_MIN || reverseNum > INT_MAX) {
    return 0;
  }

  return reverseNum;
};
const n = 987654;
console.log(reverse(n));
