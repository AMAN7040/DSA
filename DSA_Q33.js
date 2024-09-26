//LONGEST SUBARRAY WITH SUM K

//BRUTE FORCE APPROACH
// const subSum = (a, k) => {
//   let len = 0;
//   for (let i = 0; i < a.length; i++) {
//       let sum = 0;
//     for (let j = i; j < a.length; j++) {

//       sum += a[j];

//       if (sum === k) {
//         len = Math.max(len, j - i + 1);
//       }
//     }
//   }
//   return len;
// };

//BETTER APPRAOCH

// const subSum = (a, k) => {
//   const n = a.length;
//   let preSumMap = new Map();
//   let sum = 0;
//   let maxLen = 0;

//   for (let i = 0; i < n; i++) {
//     sum += a[i];

//     if (sum === k) {
//       maxLen = Math.max(maxLen, i + 1);
//     }
//     let rem = sum - k;

//     if (preSumMap.has(rem)) {
//       let len = i - preSumMap.get(rem);
//       maxLen = Math.max(maxLen, len);
//     }

//     if (!preSumMap.has(sum)) {
//       preSumMap.set(sum, i);
//     }
//   }

//   return maxLen;
// };

//OPTIMAL APPROACH

const subSum = (a, k) => {
  let left = 0;
  let right = 0;
  let sum = a[0];
  let len = 0;
  const n = a.length;

  while(right < n){

    while(left<=right && sum>k){
        sum -= a[left];
        left++;
    }

    if(sum === k){
        len = Math.max(len, right-left + 1)
    }

    right++;
    if(right<n) {
        sum += a[right];
    }
  }
  return len
};

const arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
console.log(subSum(arr, 3));
