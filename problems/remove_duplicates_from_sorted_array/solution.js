/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    let l = 0;
    let r = l + 1;
    while (r < nums.length) {
        if (nums[l] !== nums[r]) {
            l ++;
            nums[l] = nums[r];
        }
        r ++;
    }
    return l + 1;
};