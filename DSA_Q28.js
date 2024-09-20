//LINEAR SEARCH

const linear = (a, k) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === k) {
      return `${k} found at index ${i}`;
    }
  }
  return `${k} not found`;
};

const a = [4, 2, 9, 1, 3, 8];
console.log(linear(a,1));
