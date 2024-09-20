//283. Move Zeroes

//BRUTE FORCE APPROACH
// const move = (arr) => {
//     const n = arr.length;
//     const temp = []

//     for(let i =0; i<n; i++){
//         if(arr[i]!==0){
//             temp.push(arr[i])
//         }
//     }
//     for(let i=0; i<temp.length; i++){
//         arr[i] = temp[i]
//     }
//     for(let i=(temp.length); i<n;i++){
//         arr[i] = 0
//     }
//     return arr;
// }

//OPTIMAL SOLUTION

const move = (arr) => {
    const n = arr.length;
    let j = 0;
    for(let i=0; i<n; i++){
        if(arr[i]===0){
            j = i;
            break;
        }
    }
    if (j === -1) return a;
    
    for(let i=j+1; i<n; i++){
        if(arr[i]!==0){
            [arr[i],arr[j]] = [arr[j],arr[i]]
            j++;
        }
    }
    return arr;
}

const arr = [1,0,2,3,2,0,0,4,5,1];
console.log(move(arr));