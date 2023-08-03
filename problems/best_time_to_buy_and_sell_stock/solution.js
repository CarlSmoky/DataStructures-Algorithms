/**
 * @param {number[]} prices
 * @return {number}
 */
 
 const maxProfit = prices => {
    let maxDiff = 0;
    let l = 0;
    let r = 1;
   while (r < prices.length) {
        if (prices[l] < prices[r]) {
            const profit = prices[r] - prices[l];
            maxDiff = Math.max(maxDiff, profit);
        } else {
            l = r;
        }
        r += 1;
    }
    return maxDiff;
};  