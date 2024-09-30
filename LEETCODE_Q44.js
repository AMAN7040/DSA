//128. Longest Consecutive Sequence

// const ls = (a, curr) => {
//   for (let k = 0; k < a.length; k++) {
//     if (a[k] === curr) {
//       return true;
//     }
//   }
//   return false;
// };

// const longcon = (a) => {
//   let length = 0;

//   for (let i = 0; i < a.length; i++) {
//     let curr = a[i];
//     let cnt = 1;
//     while (ls(a, curr + 1) === true) {
//       curr++;
//       cnt++;
//     }

//     length = Math.max(length, cnt);
//   }
//   return length;
// };

//BETTER approach
// const longcon = (a) => {
//   let longest = 1;
//   let count = 0;
//   let least = Number.MIN_SAFE_INTEGER;

//   a.sort((a,b)=>a-b);

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] - 1 === least) {
//       count += 1;
//       least = a[i];
//     } else if (a[i] !== least) {
//       count = 1;
//       least = a[i];
//     }

//     longest = Math.max(longest, count);
//   }
//   return longest;
// };

//OPTIMAL APPROACH

const longcon = (nums) => {
  let longest = 1;
  const n = nums.length;

  if (n === 0) return 0;

  const st = new Set();

  for (let i = 0; i < n; i++) {
    st.add(nums[i]);
  }

  for (let num of st) {
    if (!st.has(num - 1)) {
      let cnt = 1;
      let x = num;

      while (st.has(x + 1)) {
        cnt += 1;
        x += 1;
      }
      longest = Math.max(cnt,longest);
    }
  }
  return longest
};
const arr = [102, 4, 100, 1, 101, 3, 2, 1, 1];
console.log(longcon(arr));
