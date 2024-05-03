/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxK = (nums) => {
    const hash = {};
    let maxNum = -1;
    for (let n of nums) {
        const absNum = Math.abs(n);
        if (hash[absNum] !== n) {
            hash[absNum] = (hash[absNum] || 0) + n;
        }
        if (hash[absNum] === 0) {
            maxNum = Math.max(maxNum, absNum);
        }
    }
    return maxNum;
};