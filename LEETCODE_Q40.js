//2149. Rearrange Array Elements by Sign

const rearr = (a) => {
  let pos = 0;
  let neg = 1;
  const newArr = new Int32Array(a.length);

  for (let i = 0; i < a.length; i++) {
    if (a[i] >= 0) {
      newArr[pos] = a[i];
      pos += 2;
    } else {
      newArr[neg] = a[i];
      neg += 2;
    }
  }
  return newArr;
};

const arr = [3, 1, -2, -5, 2, -4];
console.log(rearr(arr));
