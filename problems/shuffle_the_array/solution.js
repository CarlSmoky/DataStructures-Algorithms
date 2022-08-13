/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const firstHalf = nums.slice(0, n);
    const lastHalf = nums.slice(-n);
    let newArr = [];
    for (let i = 0; i < firstHalf.length; i++) {
      newArr.push(firstHalf[i]);
      newArr.push(lastHalf[i]);
    }
    return newArr;
};