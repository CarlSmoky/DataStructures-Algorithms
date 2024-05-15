/**
 * @param {string} s
 * @return {number}
 */
const maxLengthBetweenEqualCharacters = (s) => {
    // only one string
    if (s.length === 1) return -1;
    // hashmap for indecies
    const hashMap = {}
    for (let i = 0; i < s.length; i++) {
        if (hashMap[s[i]]) {
            hashMap[s[i]].push(i);
        } else {
            hashMap[s[i]] = [i];
        }
    }
    
    let maxDiff = -Infinity;
    for (const [key, value] of Object.entries(hashMap)) {
        if (value.length > 1) {
            const tmp = (value[value.length - 1]) - (value[0] + 1)
            maxDiff = Math.max(maxDiff, tmp);
        }
    }
    return maxDiff >= 0 ? maxDiff : -1;
};