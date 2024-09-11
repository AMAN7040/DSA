//FIND THE FACTORIAL OF THE NUMBER

const fact = (n) => {
    if(n===0) return 1;

    return n * fact(n-1);
}

const n = 4;
console.log(fact(n));