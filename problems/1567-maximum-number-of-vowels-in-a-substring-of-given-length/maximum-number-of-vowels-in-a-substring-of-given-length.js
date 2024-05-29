/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {
    const vowel = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxCount = 0;
    for(let i = 0; i < k; i++){
        if(vowel.has(s[i])) maxCount++;
    }
    let currentCount = maxCount;
    for(let i = k; i < s.length; i++){
        if(vowel.has(s[i-k])) currentCount--;
        if(vowel.has(s[i])) currentCount++;
        maxCount = Math.max(currentCount, maxCount);
    }
    return maxCount;
};