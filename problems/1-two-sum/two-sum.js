/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const position = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (position.has(diff)) return [position.get(diff), i];
        position.set(nums[i], i);
    }
};