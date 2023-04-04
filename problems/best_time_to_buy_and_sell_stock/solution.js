/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let l = 0;
    let r = 1;
    let maxPrice = 0;

    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            const profit = prices[r] - prices[l];
            maxPrice = Math.max(maxPrice, profit);
        } else {
            l = r;
        }
        r += 1;
    }
    return maxPrice;
};