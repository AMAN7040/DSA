//REVERSE THE ARRAY USING RECURSION

const reverse = (arr, n, i) => {
    if(i>=n/2) return arr;
    let temp;
    temp = arr[i];
    arr[i] = arr[n-i-1];
    arr[n-i-1] = temp;
    return reverse(arr,n,i+1);
}

const arr = [1,2,3,4,5];
console.log(reverse(arr, arr.length, 0))
