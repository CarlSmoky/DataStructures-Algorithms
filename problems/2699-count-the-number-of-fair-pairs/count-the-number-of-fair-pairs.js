/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
const countFairPairs = (nums, lower, upper) => {
    const sortedNums = nums.sort((a, b) => a - b);
    return countPairs(sortedNums, upper) - countPairs(sortedNums, lower - 1)
    };
    const countPairs = (nums, target) => {
        let count = 0;
        let l = 0
        let r = nums.length - 1;
        while (l < r) {
            if (nums[l] + nums[r] > target) {
                r --;
            } else {
                count += r - l;
                l ++;
            }
        }
        return count;
    }
