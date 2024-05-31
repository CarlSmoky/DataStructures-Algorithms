/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
    let total = nums.slice(0, k).reduce((acc, cur) => acc + cur, 0);
    let maxTotal = total;
    for(let i = 0; i < nums.length - k; i++) {
        total = total - nums[i] + nums[k + i];
        maxTotal = Math.max(maxTotal, total)
    }
    return maxTotal/k
    
};