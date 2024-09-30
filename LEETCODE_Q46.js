//48. Rotate Image

const rotate = (matrix) => {
  const n = matrix.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    let start = 0;
    end = n - 1;
    while (start < end) {
      [matrix[i][start], matrix[i][end]] = [matrix[i][end], matrix[i][start]];
      start++;
      end--;
    }
  }
  return matrix;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(rotate(matrix));
