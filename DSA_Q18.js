// MERGE SORT

const merge = (arr, low, mid, high) => {
  const temp = [];
  left = low;
  right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (i = 0; i < temp.length; i++) {
    arr[low + i] = temp[i];
  }
};

const mergeSort = (arr, low, high) => {
  if (low === high) return;

  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
};

const arr = [2, 1, 4, 3];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
