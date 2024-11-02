/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                res.push([nums[i], nums[j], nums[k]])
                j ++;
                while (nums[j] === nums[j - 1] && j < k) {
                    j++;
                }
            } else if (sum < 0) {
                j ++;
            } else {
                k --;
            }
        }
    }
    return res;
};