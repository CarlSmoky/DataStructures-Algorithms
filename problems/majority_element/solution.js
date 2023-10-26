/**
 * @param {number[]} nums
 * @return {number}
 */
 const majorityElement = (nums) => {
    let count = {}
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] = count[nums[i]] ? count[nums[i]] + 1 : 1
    }
    let max = [0, 0]
    for (let [key, value] of Object.entries(count)) {
        if (max[1] < value) {
            max = [key, value]
        }
    }
    return max[0]
};