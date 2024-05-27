/**
 * @param {number[]} nums
 * @return {number}
 */
const maxFrequencyElements = (nums) => {
    let maxFrequency = 0;
    const count = {};
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] = (count[nums[i]] || 0) + 1;
        maxFrequency = Math.max(maxFrequency, count[nums[i]])
    }

    return  Object.values(count).reduce((acc, cur) => cur === maxFrequency ? acc + cur : acc, 0);
};