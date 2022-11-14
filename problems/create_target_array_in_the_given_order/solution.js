/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = (nums, index) => {
    const result = [];

  for (let i = 0; i < index.length; i++) {
    result.splice(index[i], 0, nums[i]);
  }

  return result;
};