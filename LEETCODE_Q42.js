//31. Next Permutation

// const reverse = (a, start, end) => {
//     while (start < end) {
//         [a[start], a[end]] = [a[end], a[start]];
//         start++;
//         end--;
//     }
//     return a;
// }

// const nextPer = (a) =>{
//     let index = -1;
//     let n = a.length;

//     for(let i=n-2;i>=0;i--){
//         if(a[i]<a[i+1]){
//             index = i;
//             break;
//         }
//     }

//     if(index=== -1){
//         reverse(a,0,n-1);
//         return a;
//     }

//     for(let i=n-1; i>=0; i--){
//         if(a[i]>a[index]){
//             [a[index], a[i]] = [a[i], a[index]];
//             break;
//         }
//     }

//     reverse(a,index+1,n-1);

//     return a;
// }

const nextPer = (nums) => {
  let i = nums.length - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) i--;

  if(i>=0){
    var j = nums.length - 1;
    while(nums[j] <= nums[i]) j--

    [nums[i],nums[j]] = [nums[j],nums[i]];
  }

  nums.splice(i+1, nums.length - 1 -i, ...nums.slice(i+1).reverse());

  return nums
};

const arr = [2, 1, 5, 4, 3, 0, 0];
console.log(nextPer(arr));
