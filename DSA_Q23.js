//SECOND LARGEST AND SECOND SMALLEST

const secLar = (arr) => {
  let lar = arr[0];
  let sLar = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > lar) {
      sLar = lar;
      lar = arr[i];
    } else if (arr[i] < lar && arr[i] > sLar) {
      sLar = arr[i];
    }
  }
  return sLar;
};

const secSmall = (arr) => {
  let small = arr[0];
  let sSmall = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < small) {
      sSmall = small;
      small = arr[i];
    } else if (arr[i] > small && arr[i] < sSmall) {
      sLar = arr[i];
    }
  }
  return sSmall;
};

const arr = [3, 2, 1, 6, 6, 4];
console.log(secLar(arr));
console.log(secSmall(arr));
