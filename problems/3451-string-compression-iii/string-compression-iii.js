/**
 * @param {string} word
 * @return {string}
 */
const compressedString = (word) => {
    let res = "";
    let i = 0;

    while (i < word.length) {
        let count = 0;
        let cha = word[i];
        while (i < word.length && word[i] === cha && count < 9) {
            count ++;
            i++;
        }

        res += count + cha;
    }
    return res;
};