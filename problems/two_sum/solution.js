/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const tmp = target - nums[i];
        if (hashMap[tmp] || hashMap[tmp] === 0) {
            return [hashMap[tmp], i]
        } else {
            hashMap[nums[i]] = i; 
        }
    }
};