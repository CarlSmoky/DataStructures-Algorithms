/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    const length = nums.length + 1;
    let map = {};
    nums.forEach(num => {
        map[num] = map[num] ? map[num] + 1 : 1;
    })
    for (let i = 0; i < length; i++) {
        if (!map[i]) return i;
    }
};