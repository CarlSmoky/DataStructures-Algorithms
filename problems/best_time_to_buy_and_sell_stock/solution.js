/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxDiff = 0;
  let minPrice = prices[0];
  for (let i = 0; i < prices.length; i++) {
    let sellPrice = prices[i];
    let profit = sellPrice - minPrice;
    maxDiff = Math.max(maxDiff, profit);
    if (sellPrice < minPrice) minPrice = sellPrice;
  }
  return maxDiff;
};