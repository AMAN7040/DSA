//INSERTION SORT

const insertionSort = (arr,i,n) => {
 if(i>=n) return;
  let j = i;
  while (j > 0 && arr[j] < arr[j - 1]) {
    let temp = arr[j];
    arr[j] = arr[j - 1];
    arr[j - 1] = temp;

    j--;
  }
  insertionSort(arr,i+1, n)
};

const arr = [14, 9, 15, 12, 6, 8, 13];
const n = arr.length;
console.log("Before Using recusive Insertion Sort:");
console.log(arr);

insertionSort(arr, 0, n);

console.log("After Using recusive Insertion Sort:");
console.log(arr);
