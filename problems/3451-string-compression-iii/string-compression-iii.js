/**
 * @param {string} word
 * @return {string}
 */
const compressedString = (word) => {
    let prev = word[0];
    let count = 1;
    let res = "";
    for (let i = 1; i < word.length; i++) {
        if (prev === word[i]) {
            count ++;
        } else {
            res += count + prev;
            count = 1;
            prev = word[i]
        }
        if (count === 10) {
            res += 9 + prev;
            count = 1;
        }
    }
    res += count + prev;
    return res;
};