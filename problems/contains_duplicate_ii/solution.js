/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (i - hash[nums[i]] <= k) {
            return true
        }
        hash[nums[i]] = i
    }
    return false
};

