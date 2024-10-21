/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    const numsSet = new Set(nums);
    return numsSet.size !== nums.length;
};