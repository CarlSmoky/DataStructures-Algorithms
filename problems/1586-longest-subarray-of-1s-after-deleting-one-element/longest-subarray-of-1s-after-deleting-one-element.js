/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = nums => {
    let k = 1;
    let l = 0;
    let r = 0

    for (; r < nums.length; r++) {
        if (nums[r] === 0) {
            k--;
        }
        if (k < 0) {
            if (nums[l] === 0) {
                k++;
            }
            l++;
        }
    }

    return r - l - 1;
};