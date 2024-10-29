/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        // we don't want repeats, so skip numbers we've already seen
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum > 0) {
                k --;
            } else if (sum < 0) {
                j ++;
            } else {
                result.push([nums[i], nums[j], nums[k]]);
                j ++;
                // This while loop skips duplicate values to avoid adding the same triplet multiple times.
                while (nums[j] === nums[j - 1] && j < k) {
                    j ++;
                }
            }
        }
    }
    return result;
};