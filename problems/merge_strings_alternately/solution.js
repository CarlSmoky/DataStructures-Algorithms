/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
    let left = 0
    let right = 0
    let result = ''
    while (left < word1.length || right < word2.length) {
        if (left < word1.length && right < word2.length) {
            result += word1[left]
            result += word2[right]
        } else if (left < word1.length && right >= word2.length) {
            result += word1[left]
        } else if (left >= word1.length && right < word2.length) {
            result += word2[right]
        }
        left ++
        right ++
    }
    return result
    
};