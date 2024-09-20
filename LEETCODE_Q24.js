//1752. Check if Array Is Sorted and Rotated

//BRUTE FORCE APPROACH
// const isSorted = (arr,n) => {
//   for (let i = 1; i < n; i++) {
//     if (arr[i] < arr[i - 1]) return false;
//   }
//   return true;
// };

// const sortRoatated = (arr) => {
//   const n = arr.length;

//   for (let i = 0; i < n; i++) {
//     if (isSorted(arr,n)) return true;

//     arr.push(arr.shift());
//   }
//   return false;
// };

// OPTIMAL APPROACH

const sortRoatated = (arr) => {
  let count = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[(i + 1) % n]) {
      count++;
    }
    if(count>1) return false
  }
  return true;
};

const arr = [1,2,3,4,5];
console.log(sortRoatated(arr));
