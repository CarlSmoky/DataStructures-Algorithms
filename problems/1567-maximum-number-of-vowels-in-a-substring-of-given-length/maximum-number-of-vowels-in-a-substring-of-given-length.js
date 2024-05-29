/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {
    let count = 0;
    let max = 0;
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) count++; 
        if (i >= k && vowels.has(s[i - k])) count--;
        if (i >= k - 1) max = Math.max(count, max);
    }
    return max;
};