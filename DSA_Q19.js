//RECUSIVE BUBBLE SORT

const bubbleSort = (arr, n) => {
  if (n <= 1) return;
  let swapped = false;
  for (let j = 0; j < n - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      swapped = true;
    }
  }

  if (!swapped) return arr;
  bubbleSort(arr, n - 1);
  return arr;
};

const arr = [100, 1, 50, 20, 99];
console.log(bubbleSort(arr, arr.length));
