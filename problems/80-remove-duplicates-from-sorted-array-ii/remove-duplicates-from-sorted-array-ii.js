/**
 * @param {number[]} nums
 * @return {number}
 */
 const removeDuplicates = (nums) => {
    let l = 2;
    for (let r = 2; r < nums.length; r++) {
        if (nums[l - 2] !== nums[r]) {
            nums[l] = nums[r];
            l++;
        }
    }
    return l;
};