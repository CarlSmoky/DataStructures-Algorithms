/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
    let maxDiff = 0;
    let left = 0;
    let right = 1;
    while (left < prices.length) {
        console.log("l", left)
        console.log("r", right)
        if (prices[left] < prices[right]) {
            const tmpDiff = prices[right] - prices[left];
            maxDiff = Math.max(maxDiff, tmpDiff)
        } else {
            // e.g [7,1,5,3,6,4]
            // 7 > 1, so give up on 7, because 1 will always have a better solution
            left = right;
        }
        right++;
    }
    return maxDiff;
};