/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    const hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = true
        } else {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};