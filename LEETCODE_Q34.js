//1   two sum

const twoSum = (a,k) => {
    const n = a.length;
    let hash = new Map();
    
    for(let i =0; i<n; i++){
        let more = k - a[i];

        if(hash.has(more)){
            return [hash.get(more),i]
        }

        hash.set(a[i],i)
    }
    return null
}

const a = [2,6,5,8,11];
console.log(twoSum(a,14));