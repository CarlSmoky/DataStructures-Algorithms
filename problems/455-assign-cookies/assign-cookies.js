/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = (g, s) => {
    let count = 0;
    let l = 0;
    let r = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    while (l < g.length && r < s.length) {
        if (s[r] >= g[l]) {
            count ++;
            l++;
            r++;
        } else {
            r++;
        }
    }
    return count;
};