/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
    const hashCount = {};
    for (let i = 0; i < s.length; i++) {
        hashCount[s[i]] = (hashCount[s[i]] || 0) + 1;
    }

    let result = 0;
    let flag = false;
    for (let value of Object.values(hashCount)) {
        if (value % 2 === 0) {
            result += value;
        } else {
            result += value - 1;
            flag = true;
        }
    }
    if (flag) result++;
    return result;
};