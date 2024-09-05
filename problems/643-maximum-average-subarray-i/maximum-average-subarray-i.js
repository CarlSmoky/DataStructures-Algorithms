/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    let maxSum = sum;
    for (let i = 0; i < nums.length - k; i++) {
        sum -= nums[i];
        sum += nums[i + k];
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum / k
};