/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let left = 0
    let right = 1
    let maxProfit = 0
    while (left < prices.length) {
        if (prices[left] < prices[right]) {
            const profit = prices[right] - prices[left]
            maxProfit = Math.max(maxProfit, profit)
        } else {
            // e.g [7,1,5,3,6,4]
            // 7 > 1, so give up on 7, because 1 will always have a better solution
            left = right
        }
        right++
    }
    return maxProfit
};