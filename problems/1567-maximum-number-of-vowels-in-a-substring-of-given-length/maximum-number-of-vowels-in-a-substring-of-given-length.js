/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {
    const Vowels = new Set(['a', 'e', 'i', 'o','u']);
    let count = 0;
    for (let i = 0; i < k; i++) {
        if (Vowels.has(s[i])) {
            count ++;
        }
    }
    let maxVowels = count;
    for (let i = 0; i < s.length - k; i++) {
        if (Vowels.has(s[i])) count --;
        if (Vowels.has(s[i + k])) count ++;
        maxVowels = Math.max(maxVowels, count)
    }
    return maxVowels;
};