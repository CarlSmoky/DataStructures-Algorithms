/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const numsMap = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (numsMap[diff] === 0 || numsMap[diff]) {
      return [numsMap[diff], i];
    } else {
      numsMap[nums[i]] = i;
    }
  }
};