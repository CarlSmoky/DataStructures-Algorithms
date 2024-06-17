/**
 * @param {string[]} words
 * @return {string[]}
 */
const commonChars = (words) => {
    let result = [];
    for (const letter of words[0]) {
        if (words.every(w => w.includes(letter))) {
            result.push(letter)
            // remove letter from word
            words = words.map(w => w.replace(letter, ''))
        }
    }
    
    return result
};