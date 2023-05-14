/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
    // find max sum of k length of num
    let tmpmax = 0;
    let tmpSum = 0;
    for (let i = 0; i < k; i++){
        tmpmax += nums[i];
    }
    tmpSum = tmpmax; 
    for (let i = k; i < nums.length; i++) {
        tmpSum = (tmpSum - nums[i - k] + nums[i]);
        tmpmax = Math.max(tmpmax, tmpSum);
    }
    
    return tmpmax / k;
};