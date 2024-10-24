/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
    let first = 0;
    let second = 0;
    let result = "";
    while (first < word1.length || second < word2.length) {
        // Nullish coalescing operator (??)
        result += word1[first] ?? "";
        result += word2[second] ?? "";
        first ++;
        second ++;
    }
    return  result;
};