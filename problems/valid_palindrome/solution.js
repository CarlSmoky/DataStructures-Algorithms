/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
    const newStr = s.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
    let l = 0;
    let r = newStr.length - 1;
    while (r > 0) {
        if (newStr[l] !== newStr[r]) return false;
        l++;
        r--;
    }
    return true;
};