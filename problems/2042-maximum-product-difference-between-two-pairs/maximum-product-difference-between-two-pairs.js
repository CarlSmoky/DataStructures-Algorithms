/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    // nums.sort((a, b) => a - b);
    // const max = nums[nums.length -1] * nums[nums.length -2];
    // const min = nums[0] * nums[1]
    // return max - min;

    let max1 = -Infinity, max2 = -Infinity;
    let min1 = Infinity, min2 = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] >= max1) {
            max2 = max1;
            max1 = nums[i];
        } else if(nums[i] > max2) {
            max2 = nums[i];
        }

        if(nums[i] <= min1) {
            min2 = min1;
            min1 = nums[i];
        } else if (nums[i] < min2) {
            min2 = nums[i];
        }

    }
    return (max1 * max2) - (min1 * min2);
};