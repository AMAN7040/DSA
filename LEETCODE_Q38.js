//121. Best Time to Buy and Sell Stock

const stock = (a) => {
    let min = a[0];
    let maxProfit = 0;
    for(let i =1; i<a.length; i++){
        const profit = a[i] - min;
        maxProfit = Math.max(profit,maxProfit) 
        min = Math.min(a[i],min)
    }
    return maxProfit;
}

const arr = [7,1,5,3,6,4];
console.log(stock(arr));
