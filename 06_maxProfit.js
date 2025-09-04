const maxProfit = (prices) =>{
    let minPrice=prices[0];
    let maxProfit = 0;

    for(let i = 1 ; i<prices.length; i++){
        const currentPrice = prices[i];

        //update the min price if lower price is found

        minPrice = Math.min(minPrice,currentPrice) ;
        const potentialProfit = currentPrice - minPrice;

        maxProfit = Math.max(maxProfit,potentialProfit);


       }
       return maxProfit;
    
}

console.log("Maximum Profit:",maxProfit([7,1,5,3,6,3]))