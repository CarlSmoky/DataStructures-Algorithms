/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    const cleanString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let l = 0;
    let r = cleanString.length - 1;
    while (l < r) {
        if (cleanString[l] !== cleanString[r]) return false;
        l += 1;
        r -= 1;
    }
    return true;
};