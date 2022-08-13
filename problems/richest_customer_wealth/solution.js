/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
  accounts.forEach(arr => {
    const sum = arr.reduce((acc, cur) => {
      return acc + cur;
    }, 0)
    max = max < sum ? sum : max;
  })
  return max;
};