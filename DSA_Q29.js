//UNION OF TWO SORTED ARRAYS

//BRUTE FORCE APPROACH
// function findUnion(arr1, arr2) {
//    let union1 = new Set();

//    for(let num of arr1){
//     union1.add(num)
//    }
//    for(let num of arr2){
//     union1.add(num)
//    }

//    return Array.from(union1)
//   }

//   let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let arr2 = [2, 3, 4, 4, 5, 11, 12];

//   let union = findUnion(arr1, arr2);

//   console.log("Union of arr1 and arr2 is:");
//   console.log(union.join(" "));

//OPTIMAL APPROACH

const union = (arr1, arr2) => {
  let i = 0;
  j = 0;
  const result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
    } else {
      if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
        result.push(arr2[j]);
      }
      j++;
    }
  }
  while (i < arr1.length) {
    if (result[result.length - 1] !== arr1[i]) {
      result.push(arr1[i]);
    }
    i++;
  }
  while (j < arr2.length) {
    if (result[result.length - 1] !== arr2[j]) {
      result.push(arr2[j]);
    }
    j++;
  }
  return result;
};

let arr1 = [1,1,2,3,4,4,4,4,6,9];
let arr2 = [2,2,3,3,5,5,7,8,10,12];

console.log(union(arr1, arr2));
