/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
    let l = 0;
    let r = 0;
    let result = [];
    while (l < s.length && r < t.length) {
        if (s[l] === t[r]) {
            result.push(s[l])
            l++;
        }
        r++;
    }
    
    return result.join("") === s;
};