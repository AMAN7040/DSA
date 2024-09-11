//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
//Given a string s, return true if it is a palindrome, or false otherwise.

//APPROACH - 1
// const revString = (s, i) => {
//   if (i >= s.length / 2) return true;

//   if (s[i] !== s[s.length - i - 1]) return false;

//   return revString(s, i + 1);
// };

// let s = "A man, a plan, a canal: Panama";
// s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
// console.log(revString(s, 0));

//APPROACH -2

const isPalindrome = (s) => {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  left = 0;
  right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
