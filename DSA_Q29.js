//UNION OF TWO SORTED ARRAYS 

function findUnion(arr1, arr2) {
   let union1 = new Set();

   for(let num of arr1){
    union1.add(num)
   }
   for(let num of arr2){
    union1.add(num)
   }

   return Array.from(union1)
  }
  
  let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
  let arr2 = [2, 3, 4, 4, 5, 11, 12];
  
  let union = findUnion(arr1, arr2);
  
  console.log("Union of arr1 and arr2 is:");
  console.log(union.join(" "));