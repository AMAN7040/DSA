//FIND SUM OF N NUMBERS USING REEURSION

const sum = (n) => {
    if(n==0) return 0;
    
    return n + sum(n-1);
}

const n = 5;
console.log(sum(n));