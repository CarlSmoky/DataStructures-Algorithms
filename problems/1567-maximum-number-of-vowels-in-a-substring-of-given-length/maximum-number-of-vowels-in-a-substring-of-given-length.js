/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {
    let res = 0, count = 0;
    const Vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let i = 0; i < k; i++) {
        if (Vowels.has(s[i])) count++;
    }
    res = count;

    for (let i = 0; i < s.length - k; i++) {
        if (Vowels.has(s[i])) count--;         
        if (Vowels.has(s[i + k])) count++;      
        res = Math.max(res, count);             
    }

    return res;
};