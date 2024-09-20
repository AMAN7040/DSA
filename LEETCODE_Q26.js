// Rotate Array
const rev = (arr,start,end) => {
    while(start < end){
        [arr[start],arr[end]] = [arr[end],arr[start]];
        start++;
        end--
    }
}

const rotate = (arr,k) => {
    const n = arr.length;
    k = k% n;
    rev(arr,0,n-1);
    rev(arr,0,k-1);
    rev(arr,k,n-1);
    return arr;
}

const arr = [-1,-100,3,99];
console.log(rotate(arr,2));