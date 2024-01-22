/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
    let first = word1.length;
    let second = word2.length;
    let result = "";
    for (let i = 0; i < first || i < second; i++) {
        if( word1[i] !== undefined) {
            result += word1[i];
        }
        if( word2[i] !== undefined) {
            result += word2[i];
        }
    }
    return result;
};