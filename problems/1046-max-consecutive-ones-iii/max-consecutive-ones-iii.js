/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = (nums, k) => {
   let start = 0, end = 0;
    for (; end < nums.length; end++) {
        if (nums[end] === 0) k--;
        if (k < 0) {
            if (nums[start] === 0) k++;
            start++;
        }
    }
    return end - start;
};