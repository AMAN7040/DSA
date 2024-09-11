const isPrime = (n) => {
  if (n === 1) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i +=6) {
    if (n % i === 0 || (n + 2) % i === 0) return false;
  }
  return true;
};

const n = 25;
console.log(isPrime(n));
