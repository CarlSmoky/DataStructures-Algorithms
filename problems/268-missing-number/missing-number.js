/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    for (let i = 0; i < nums.length + 1; i++) {
        if (nums.indexOf(i) === -1) return i;
    }
};