/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    const hash = {}
    for (i = 0; i < nums.length; i++) {
        hash[nums[i]] = (hash[nums[i]]) ?  hash[nums[i]] + 1 :  1
    }
    let max = [0, 0]
    for (const [key, value] of Object.entries(hash)) {
        if (max[1] < value) {
            max = [key, value]
        }
    }
    return max[0]
};