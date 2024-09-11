const gcd = (a, b) => {
  while (a > 0 && b > 0) {
    if (a > b) a = a % b;
    else b = b % a;
  }
  if (a === 0) return b;
  return a;
};

const a = 12;
const b = 9;
console.log(gcd(a, b));
