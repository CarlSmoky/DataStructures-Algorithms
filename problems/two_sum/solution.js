/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    // iterate through nums
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map[diff] === 0 || map[diff]) {
            return [map[diff], i];
        } else {
            map[nums[i]] = i;
        }
    }
    // target - nums[i]
    // if diff doesn't match, add hashmap with index as value
    // if match return i and value of the diff
};