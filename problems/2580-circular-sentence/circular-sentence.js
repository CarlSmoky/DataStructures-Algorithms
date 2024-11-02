/**
 * @param {string} sentence
 * @return {boolean}
 */
const isCircularSentence = sentence => {
    const words = sentence.split(" ");
    if (sentence[0] !== sentence[sentence.length - 1]) return false;
    for (let i = 0; i < words.length - 1; i++) {
        const lastCha = words[i][words[i].length - 1];
        const nextWordFirstCha = words[i + 1][0];
        if (lastCha !== nextWordFirstCha ) return false;
    }
    return true;
};