//560. Subarray Sum Equals K

const subSum = (nums,k) => {
  let sum = 0;
  let count = 0;
  let hash = new Map();
  hash.set(0,1);

  for(let i=0; i<nums.length; i++){
    sum += nums[i];
    let rem = sum - k;

    if(hash.has(rem)){
        count += hash.get(rem);
    }  

    hash.set(sum, (hash.get(sum) || 0) +1)
  }
  return count;
}

const arr = [1,2,3,-3,1,1,1,4,2,-3];
const k = 3;

console.log(subSum(arr,k));
