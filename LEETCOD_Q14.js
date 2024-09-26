//268. Missing Number
// Easy
// Topics
// Companies
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

//APPROACH-1 By using sum of number
// const misingNum = (n) => {
//     let sum = 0;
//     n.forEach((num)=>{
//         sum+=num
//     })
//     return (n.length*(n.length+1))/2 - sum;
// }


//APPROACH - 2 BY using XOR operation

const misingNum = (n) => {
    let xorArray = 0; xorNum = 0

    for(let i =0; i<n.length ; i++){
        xorNum ^= i+1
        xorArray ^= n[i]
    }
    xorArray ^= n.length
    return xorArray ^ xorNum;
}

// const misingNum = (arr, n) => {
//     for(let i=1; i<=n;i++){
//         let flag = 0;
//         for(let j=0; j<n-1;j++){
//             if(i === arr[j]){
//                 flag=1;
//                 break;
//             }
//         }
//         if(flag===0) return i;
//     }

// }

// const misingNum = (arr,n) => {
//     const hash = new Array(n+1).fill(0);
    
//     for(let i=0; i<n-1; i++){
//         hash[arr[i]] = 1;
//     }
//     for(let i =1; i<=n; i++){
//         if(hash[i]===0) return i
//     }
// }

const arr = [1,2,3,5];
const n = 5;
console.log(misingNum(arr,n));


