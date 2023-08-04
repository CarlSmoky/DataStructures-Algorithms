/**
 * @param {string} s
 * @return {number}
 */
const partitionString = s => {
    let ans = 1;
    let i = 0;
    let counts = {};

    while(i < s.length) {
        let ch = s[i];
        if(ch in counts) {
            counts = {};
            ans++;
        }
        counts[ch] = 1;
        i ++;
    }
    return ans;
};