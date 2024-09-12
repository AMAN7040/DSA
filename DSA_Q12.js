//Number hashing using arrays
// const count = (n,target) => {
//     const hash = {};
//     for(let i=0; i<n.length; i++){
//        if(hash[n[i]]) hash[n[i]] += 1
//        else hash[n[i]] = 1
//     }
//     for(let i=0; i<target.length; i++){
//         console.log(hash[target[i]])
//     }
// }
// const n = [1,2,3,1,2,4,5];
// const target = [2,3,5]
// count(n,target)

//------------------------------------------
//character hashing using arrays

const characCount = (str, target) => {
  const frequency = Array(26).fill(0);

  for (const char of str) {
    const index = char.charCodeAt(0) - "a".charCodeAt(0);
    frequency[index] += 1;
  }
  for (const char of target) {
    const index = char.charCodeAt(0) - "a".charCodeAt(0);
    console.log(frequency[index])
  }
  
};

const str = "aafbacdsvb";
const target = "acf";
characCount(str, target);
