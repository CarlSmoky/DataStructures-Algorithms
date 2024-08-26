/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = (nums, k) => {
    nums.sort((a, b) => a - b);
  
    let result = 0;
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        const sum = nums[l] + nums[r];
        if (sum === k) {
            result ++;
            l ++;
            r --;
        } else if (sum < k) {
            l ++;
        } else {
            r --;
        }
    }
    return result;
};