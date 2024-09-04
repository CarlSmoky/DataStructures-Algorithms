/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
    let maxSum = 0;
    for (let i = 0; i < k; i++){
        maxSum += nums[i];
    }
    let tmpSum = maxSum;
    for (let i = 0; i < nums.length - k; i++) {
        tmpSum -= nums[i];
        tmpSum += nums[i + k];
        maxSum = Math.max(maxSum, tmpSum)
    }
    return maxSum / k
};