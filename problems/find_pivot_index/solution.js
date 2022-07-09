/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let rightSum = 0;
    if (i === 0) {
      for (let j = 1; j < nums.length; j++) {
        rightSum += nums[j];
      }
      if (leftSum === rightSum) return 0;
    } else {
      leftSum += nums[i - 1];
      for (let j = i + 1; j < nums.length; j++) {
        rightSum += nums[j];
      }
      if (leftSum === rightSum) return i;
    }
  }
  return -1;
};