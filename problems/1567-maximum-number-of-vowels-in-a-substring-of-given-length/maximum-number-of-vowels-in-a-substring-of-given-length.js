/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = [...s].splice(0, k).filter(el => vowels.indexOf(el) !== -1).length;

    let maxTotal = count;
    for (let i = 0; i < s.length - k; i++) {
        if (vowels.indexOf(s[i]) !== -1) {
            count --;
        }
        if (vowels.indexOf(s[i + k]) !== -1) {
            count ++;
        }
        maxTotal = Math.max(maxTotal, count);
    }
    return maxTotal;
};