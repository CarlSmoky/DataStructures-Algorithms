/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxK = (nums) => {
    const set = new Set(nums);
    let maxNum = -1;
    for (let n of nums) {
        if (n > 0 && set.has(-n)) {
            maxNum = Math.max(maxNum, n)
        }
    }
    return maxNum;
};