/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
    k = k % nums.length; 
    const tmp = nums.splice(nums.length - k);
    nums.unshift(...tmp);
};