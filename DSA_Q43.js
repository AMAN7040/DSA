//LEADERS IN AN ARRAY

// const leader = (a) => {
//   const result = [];
//   for (let i = 0; i < a.length; i++) {
//     let status = true;
//     for (let j = i + 1; j < a.length; j++) {
//       if (a[j] > a[i]) {
//         status = false;
//         break;
//       }
//     }

//     if (status) {
//       result.push(a[i]);
//     }
//   }
//   return result;
// };

//optimal approach

const leader = (a) =>{
    let result =[];
    let max = -1;
    for(let i=a.length-1;i>=0;i--){
        if(a[i]>max){
            max = a[i];
            result.push(a[i])
        }
    }
    return result;
}
const arr = [10, 22, 12, 3, 0, 6];
console.log(leader(arr));
