/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = (nums, k) => {
    let l = 0;
    let r = 0;
    for (; r < nums.length; r++) {
        if (nums[r] === 0) {
            k --;
        }
        if (k < 0) {
            if (nums[l] === 0) k ++;
            l ++;
        }
    }
    return r - l;
};