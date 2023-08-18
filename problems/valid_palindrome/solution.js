/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    const removeEmptystr = s.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
    if (removeEmptystr.length === 0) return true;
    let reverseStr = "";
    for (let i = removeEmptystr.length -1 ; i >= 0; i--) {
        reverseStr += removeEmptystr[i];
    } 
    return removeEmptystr === reverseStr;
};