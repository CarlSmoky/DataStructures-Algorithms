/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
    for (let i = 0; i < haystack.length; i++) {
        const newStr = haystack.slice(i, i + needle.length);
        if(newStr === needle) {
            return i;
        }
    }
    return -1;
};