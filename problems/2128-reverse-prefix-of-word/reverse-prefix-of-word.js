/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
const reversePrefix = (word, ch) => {
    const pos = word.indexOf(ch);
    const left = [...word].splice(0, pos + 1).reverse().join("");
    const right = [...word].splice(pos + 1).join("");
    return left + right;
};