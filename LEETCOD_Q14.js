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

    n.forEach((num)=>{
        xorArray ^= num;
    })

    for(let i =0; i<=n.length ; i++){
        xorNum ^= i
    }
    return xorArray ^ xorNum;
}

const n = [3,0,1,5,2];
console.log(misingNum(n));


