/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
    for (let i = 0; i < haystack.length; i++) {
        const slicedStr = haystack.slice(i, i + needle.length);
        if (slicedStr === needle) return i;
    }
    return -1;
};