/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = (nums, k) => {
    nums.sort((a, b) => a - b);
    let l = 0;
    let r = nums.length - 1;
    let res = 0;
    while (l < r) {
        const sum = nums[l] + nums[r];
        if (k === sum) {
            res ++;
            l ++;
            r --;
        } else if (k < sum) {
            r --;
        } else {
            l ++;
        }
    }
    return res;
};