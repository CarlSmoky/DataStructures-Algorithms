/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map[diff] === 0 || map[diff]) return [map[diff], i]; 
        map[nums[i]] = i;
    }
};