// CHECK WHEATHER PALINDROME OR NOT
// Given an integer x, return true if x is a palindrome and false otherwise.

const palindrome = (num) => {
  let reverseNum = 0;
  const originalNum = num;
 
  if(num < 0) return false;

  if(num < 10) return true;

  while (num > 0) {
    
    let lastDigit = num % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return reverseNum === originalNum;
};

const n = 1221;
console.log(palindrome(n));
