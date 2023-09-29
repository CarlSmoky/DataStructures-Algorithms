/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    const strArr = x.toString().split("");
    let l = 0;
    let r = strArr.length - 1;
    while (l < strArr.length/2) {
        if (strArr[l] !== strArr[r]) return false;
        l++;
        r--;
    }
    return true;
};