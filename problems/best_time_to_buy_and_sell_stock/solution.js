/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let l = 0;
    let r = l + 1;
    let maxProfit = 0;
    while (l < prices.length) {
        if (prices[l] < prices[r]) {
            const tmpProfit =  prices[r] - prices[l];
            maxProfit = Math.max(tmpProfit, maxProfit);
        } else {
            l = r;
        }
        r++;
    }
    return maxProfit;
};