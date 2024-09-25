//INTERSECTION OF TWO SORTED ARRAYS

// const interSec = (arr1, arr2) => {
//     const result = [];

//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             if(arr1[i] === arr2[j] && !result.includes(arr1[i])){
//                 result.push(arr1[i]);
//                 break;
//             }

//             if(arr2[j] > arr1[i]) break;
//         }
//     }

//     return result
// }

//OPTIMAL APPROACH

const interSec = (a, b) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      i++;
    } else if (b[j] < a[i]) {
      j++;
    } else {
      result.push(a[i]);
      i++;
      j++;
    }
  }
  return result;
};

const arr1 = [1, 2, 2, 3, 3, 4, 5, 6, 10];
const arr2 = [2, 3, 4, 4, 5, 6, 10];

console.log(interSec(arr1, arr2));
