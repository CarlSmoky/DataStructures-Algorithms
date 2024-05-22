/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = (nums) => {
    let result = [];
    const count = {};
    for (const n of nums) {
        count[n] = (count[n] || 0) + 1;
    }

    for (let i = 1; i <= nums.length; i++) {
        if (count[i] > 1) {
            result[0] = i;
        }
        if (!count[i]) {
            result[1] = i;
        }
    }
    return result;
};