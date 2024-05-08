/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProductDifference = (nums) => {
    nums.sort((a, b) => a - b);
    const max = nums[nums.length -1] * nums[nums.length -2];
    const min = nums[0] * nums[1]
    return max - min;
}