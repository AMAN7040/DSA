//136. Single Number

//brute force
// const oneNum = (a) => {
//     for(let i=0; i<a.length; i++){
//         let count=0;
//         for(let j=0;j<a.length;j++){
//           if(a[i] === a[j]){
//             count++;
//           }
//         }
//         if(count===1) return a[i]
//     }
// }
 
//Better approach
// const oneNum = (a) => {
//     let max = a[0];
//     for(let i=0;i<a.length;i++){
//         max = Math.max(max,a[i]);
//     }
//     const hash = new Array(max+1).fill(0);
//     for(let i=0;i<a.length;i++){
//        hash[a[i]]++;
//     }
//     for(let i=0;i<a.length;i++){
//        if(hash[a[i]]===1) return a[i];
//     }
// }

// const oneNum = (a) => {
//     const hash = new Map();

//     for(let i =0; i<a.length;i++){
//         hash.set(a[i],(hash.get(a[i]) || 0)+1);
//     }
//     for(let [key,value] of hash){
//         if(value===1) return key;
//     }
// }

const oneNum = (a) => {
    let xor = 0;

    for(let i=0; i<a.length; i++){
        xor ^= a[i];
    }
    return xor;
}

//OR
// const oneNum = (a) => {
//     return nums.reduce((acc,xor)=> xor ^ acc,0)
// }

const arr = [1,1,2,2,3,3,4,5,5,6,6];
console.log(oneNum(arr));