//169. Majority Element

//better appraoch
// const major = (a) => {
//     let hash = new Map();

//     for(let i=0;i<a.length;i++){

//         if(hash.has(a[i])){
//             hash.set(a[i],hash.get(a[i]) + 1);
//         }
//         else{
//             hash.set(a[i],1)
//         }

//         if(hash.get(a[i]) > a.length/2){
//             return a[i];
//         }
//     }
// }

//OPTIMAL SOLUTION

const major = (a) => {
    let x;
    let count=0;

    for(let i=0; i<a.length;i++){
        if(count===0){
            count = 1;
            x = a[i];
        }
        else if(x === a[i]){
            count++;
        }
        else{
            count--;
        }
    }
    return x;
}

const a = [2,2,1,1,1,2,2]
console.log(major(a));
