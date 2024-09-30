// 73. Set Matrix Zeroes

//BRUTE FORCE
// const markRow = (a, i, n, m) => {
//   for (let j = 0; j < m; j++) {
//     if (a[i][j] !== 0) {
//       a[i][j] = -1;
//     }
//   }
// };

// const marlCol = (a, j, n, m) => {
//   for (let i = 0; i < n; i++) {
//     if (a[i][j] !== 0) {
//       a[i][j] = -1;
//     }
//   }
// };

// const matrix = (a, n, m) => {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (a[i][j] === 0) {
//         markRow(a, i, n, m);
//         marlCol(a, j, n, m);
//       }
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (a[i][j] === -1) {
//         a[i][j] = 0;
//       }
//     }
//   }
//   return a;

// };

//BETTER APPROACH

// const matrix = (a,n,m) => {
//     const row = new Array(n).fill(0);
//     const col = new Array(m).fill(0);

//     for(let i=0; i<n; i++){
//         for(let j=0; j<m; j++){
//             if(a[i][j]===0){
//                 row[i] = 1;
//                 col[j] = 1;
//             }
//         }
//     }
//     for(let i=0; i<n; i++){
//         for(let j=0; j<m; j++){
//             if(row[i] || col[j]){
//                 a[i][j] = 0;
//             }
//         }
//     }

//     return a;
// }

//OPTIMAL APPROACH

const matrix = (a, n, m) => {
  let col0 = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (a[i][j] === 0) {
        a[i][0] = 0;
        if (j !== 0) {
          a[0][j] = 0;
        } else {
          col0 = 0;
        }
      }
    }
  }

  for(let i=1; i<n; i++){
    for(let j=1; j<m; j++){
       if(a[i][j] !==0){
        if(a[i][0]===0 || a[0][j]===0){
            a[i][j] = 0;
        }
       }
    }
  }

  if(a[0][0]===0){
    for(let j=0; j<m; j++){
        a[0][j] = 0;
    }
  }

  if(col0 === 0){
    for(let i=0; i<n; i++){
        a[i][0] = 0
    }
  }
  return a;
};

const arr = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
const n = arr.length;
const m = arr[0].length;
console.log(matrix(arr, n, m));
