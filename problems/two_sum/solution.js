/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (map[diff] || map[diff] === 0) {
            return [map[diff], i]
        } else {
            map[nums[i]] = i
        }
    }
};