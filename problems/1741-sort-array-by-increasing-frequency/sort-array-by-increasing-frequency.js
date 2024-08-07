/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = (nums) => {
    const frequency = nums.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    },{})

    return nums.sort((a, b) => frequency[a] - frequency[b] || b - a);
};