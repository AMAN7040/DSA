//QUICK SORT

const partition = (arr, low, high) => {
  let i = low,
    j = high,
    pivot = arr[low];
  while (i < j) {
    while (arr[i] <= pivot && i < high) {
      i++;
    }
    while (arr[j] > pivot && j > low) {
      j--;
    }
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  arr[low] = arr[j];
  arr[j] = pivot;
  return j;
};

const quickSort = (arr, low, high) => {
  if (low < high) {
    let pIndex = partition(arr, low, high);
    quickSort(arr, low, pIndex);
    quickSort(arr, pIndex + 1, high);
  }
  return arr;
};

const arr = [4, 6, 2, 5, 7, 9, 1, 3];
console.log(quickSort(arr, 0, arr.length - 1));
