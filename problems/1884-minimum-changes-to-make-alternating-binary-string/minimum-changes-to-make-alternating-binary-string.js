/**
 * @param {string} s
 * @return {number}
 */
const minOperations = (s) => {
    let countZero = 0;
    let countOne = 0;
    for (let i = 0; i < s.length; i++) {
        i % 2 != s[i] ? countZero++ : countOne++;
    }
    return Math.min(countZero, countOne)
};