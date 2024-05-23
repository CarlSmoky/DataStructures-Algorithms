/**
 * @param {string[]} words
 * @return {string}
 */
const firstPalindrome = (words) => {
    for (let w of words) {
        if (isPalindromic(w)) return w;
    }
    return "";
};

const isPalindromic = (w) => {
    let l = 0;
    let r = w.length - 1;
    while (l < r) {
        if (w[l] !== w[r]) return false;
        l++;
        r--;
    }
    return true;
}