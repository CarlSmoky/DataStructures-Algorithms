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
        if (word1[first]) {
            result += word1[first];
            first ++;
        }
        if (word2[second]) {
            result += word2[second];
            second ++;
        }
    }
    return  result;
};