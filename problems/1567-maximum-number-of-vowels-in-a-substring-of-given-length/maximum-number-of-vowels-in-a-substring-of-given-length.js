/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {
    let max = 0;
    const vowelsSet = new Set(['a', 'e', 'i', 'o','u']);
    let count = 0;
    for (let i = 0; i < k; i++) {
        if(vowelsSet.has(s[i])) count ++;
    }
    max = count
    let l = 0;
    for (let r = l + k; r < s.length; r++) {
        if (vowelsSet.has(s[l])) {
            count --;
        }
        if (vowelsSet.has(s[r])) {
            count ++;
        }
        l ++;
        max = Math.max(max, count);
    }
    return max;
};