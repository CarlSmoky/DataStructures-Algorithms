/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        if (nums[i] === 0) {
            nums.push(nums[i])
            nums.splice(i, 1);
            i--;
            length--;
        }
    }
};