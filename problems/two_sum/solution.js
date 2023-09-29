/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    // hashmap
    const hashMap = {};
    // iterate through nums
    for (let i = 0; i < nums.length; i++) {
        // diff = target - nums[i]
        const diff = target - nums[i];
        // check if diff in hashmap
        // if exists, return value of the key , i
        if (hashMap[diff] || hashMap[diff] === 0) {
            return [hashMap[diff], i];
        // if not, add key as nums[i] and value as i
        } else {
            hashMap[nums[i]] = i
        }
    }
};