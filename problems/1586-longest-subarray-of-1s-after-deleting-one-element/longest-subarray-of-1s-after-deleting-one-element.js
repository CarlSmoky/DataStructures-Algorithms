/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = nums => {
    let maxLen = 0;
    let countZero = 0;
    let l = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] === 0) countZero++;

        while (countZero > 1) {
            if (nums[l] === 0) countZero--;
            l++;
        }

        maxLen = Math.max(maxLen, r - l);
    }

    return maxLen;
};