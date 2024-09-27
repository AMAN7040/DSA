//53. Maximum Subarray

//Better approach
// const maxSub = (a) => {
//   let maxSum = 0;
//   for (let i = 0; i < a.length; i++) {
//     let sum = 0;
//     for (let j = i; j < a.length; j++) {
//       sum += a[j];

//       maxSum = Math.max(maxSum, sum);
//     }
//   }
//   return maxSum;
// };

//OPTIMAL SOLUTION

const maxSub = (a) => {
  let sum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
};
const a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSub(a));
