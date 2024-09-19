//LARGEST NUMBER IN ARRAY

const larNum = (arr) => {
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

const arr = [1,4,100,99,2,50];
console.log(larNum(arr));