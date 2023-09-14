/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
    // make s array
    const strings = s.split(" ");
    // check length of pattern and array of s
    if (pattern.length !== strings.length) return false;
    const patternSet = new Set(pattern);
    const stringsSet = new Set(strings);
    if (patternSet.size !== stringsSet.size) return false;
    
    // check value pair in hashmap
    const map = {};
    // iterate through pattern and s
    for (let i = 0; i < pattern.length; i++) {
        if (!map[pattern[i]]) {
            map[pattern[i]] = strings[i];
        } else {
            if (map[pattern[i]] !== strings[i]) return false;
        }
    }
    return true
};