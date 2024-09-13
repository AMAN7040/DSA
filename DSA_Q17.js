//INSERTION SORT

const insertionSort = (arr) => {
    for(let i=0; i<arr.length; i++){
        let j =i;
        while(j>0 && arr[j]<arr[j-1]){
            let temp = arr[j];
            arr[j]= arr[j-1];
            arr[j-1] = temp;

            j--;
        }
    }
    return arr;
}

const arr = [14,9,15,12,6,8,13];
console.log(insertionSort(arr));
