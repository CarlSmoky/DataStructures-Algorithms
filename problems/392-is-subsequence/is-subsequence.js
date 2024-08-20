/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
    let sIndex = 0;
    let tIndex = 0;
    while (sIndex < s.length && tIndex < t.length) {
        if (s[sIndex] === t[tIndex]) {
            sIndex += 1;
        }
        tIndex += 1;
    }
    return sIndex === s.length;
};