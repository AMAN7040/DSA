//BUBBLE SORT

const bubbleSort = (arr) => {
    for(let i =0; i<arr.length; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]<arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j]
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const arr = [13,46,24,52,20,9];
console.log(bubbleSort(arr));