/**
 * @param {string} sentence
 * @return {boolean}
 */
const isCircularSentence = sentence => {
    const words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        const lastCha = words[i][words[i].length - 1];
        if (i < words.length - 1) {
            const nextWordFirstCha = words[i + 1][0];
            if (lastCha !== nextWordFirstCha ) {
                return false;
            }
        }
        if (i === words.length - 1) {
            const firstCha = words[0][0];
            if (firstCha !== lastCha) {
                return false;
            }
        }
    }
    return true;
};