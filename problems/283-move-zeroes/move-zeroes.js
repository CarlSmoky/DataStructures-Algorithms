/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
    let l = 0;
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] !== 0) {
            const tmp = nums[r];
            nums[r] = nums[l];
            nums[l] = tmp
            l ++;
        }
    }
};