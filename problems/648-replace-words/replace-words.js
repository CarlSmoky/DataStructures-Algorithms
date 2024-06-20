/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = (dictionary, sentence) => {
    let arraySentence = sentence.split(" ");
    for (let i = 0; i < arraySentence.length; i++) {
        for (let item of dictionary) {
            if (arraySentence[i].startsWith(item)) {
                arraySentence[i] = item;
            }
        }
    }
    return arraySentence.join(" ")
};