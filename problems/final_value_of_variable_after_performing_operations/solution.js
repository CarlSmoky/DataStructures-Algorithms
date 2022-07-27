/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.reduce((acc, cur) => {
    if (cur === "++X" || cur === "X++") return acc + 1;
    if (cur === "--X" || cur === "X--") return acc - 1;
  }, 0)
};