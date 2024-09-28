//PRINT MAXIMUM sum SUBARRAY

const maxSub = (a) => {
  let sum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let start;
  let arrStart;
  let arrEnd;
  for (let i = 0; i < a.length; i++) {
    if (sum === 0) {
      start = i;
    }

    sum += a[i];
    if (sum > maxSum) {
      maxSum = sum;
      arrStart = start;
      arrEnd = i;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return [arrStart, arrEnd];
};
const a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSub(a));
