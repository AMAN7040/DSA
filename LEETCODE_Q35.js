// const sort = (a) => {
//   let count0 = 0;
//   let count1 = 0;
//   let count2 = 0;

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === 0) count0++;
//     else if (a[i] === 1) count1++;
//     else count2++;
//   }
//   for(let i=0;i<count0;i++){
//     a[i] =  0
//   }
//   for(let i=count0;i<count1+count0;i++){
//     a[i] =  1
//   }
//   for(let i=count1+count0;i<count2+count0+count1;i++){
//     a[i] =  2
//   }
//   return a;
// };

const sort = (a) => {
    let low =0;
    let mid= 0;
    let high = a.length-1;

    while(mid <=high){
        if(a[mid]===0){
            [a[low],a[mid]] = [a[mid],a[low]];
            low++;
            mid++;
        }
        else if(a[mid]===1){mid++}
        else{
            [a[mid],a[high]] = [a[high],a[mid]];
            high--;
        }
    }
    return a;
}

const a = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1];
console.log(sort(a));
