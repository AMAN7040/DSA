const div = (num) => {
    const arr = [];
    const sqrtNum = Math.sqrt(num)
    for(let i=1; i<=sqrtNum; i++){
        if(num % i === 0){
            arr.push(i);
            if(i !== (num/i)){
                arr.push(num/i);
            }
        }
    }
    return arr.sort((a,b) => a-b);
}

const num = 20;
console.log(div(num));

