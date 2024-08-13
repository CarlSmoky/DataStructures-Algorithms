/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
    let sIndex = 0
    let tIndex = 0
    if (s.length === 0) return true;
    while (sIndex < s.length && tIndex < t.length) {
        if (s[sIndex] === t[tIndex]) {
            sIndex ++;
        }
        tIndex ++;
    }
    return sIndex === s.length;
};