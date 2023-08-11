/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    // make hashMap with count
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
        if (map[nums[i]] > nums.length / 2) return nums[i]
    }
};