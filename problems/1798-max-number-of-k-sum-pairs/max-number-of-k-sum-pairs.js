/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = (nums, k) => {
    const count = nums.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc
    }, {})
    let result = 0;
    for (let n of nums) {
        const diff = k - n;
        if ((n === diff && count[n] > 1) || (n !== diff && count[n] > 0 && count[diff] > 0)) {
            result ++
            count[n] -= 1
            count[diff] -= 1
        }
    }
    return result
};