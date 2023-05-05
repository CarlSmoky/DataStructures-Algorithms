/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
// const mergeAlternately = (word1, word2) => {
//     //Adjust length of word and get left over 
//     let leftOver = ""
//     if (word1.length > word2.length) {
//         leftOver = word1.slice(word2.length);
//         word1 = word1.slice(0, word2.length);
//     } else {
//         leftOver = word2.slice(word1.length);
//         word2 = word2.slice(0, word1.length);
//     }
    
//     //define margedString
//     let margedString = ""
//     //iterate through word1
//     for (let i = 0; i < word1.length; i++) {
//         margedString += word1[i];
//         margedString += word2[i];
//     }
//     //append the left over to margedString
//     margedString += leftOver;
//     // return margedString
//     return margedString;
// };
//Refactor
const mergeAlternately = (word1, word2) => {
    let i = 0;
    let newStr = ""
    while (i < word1.length && i < word2.length) {
        newStr += word1[i] + word2[i];
        i++;
    }
    const leftover = word1.length > word2.length ? word1.slice(word2.length) : word2.slice(word1.length);
    return newStr + leftover;
}

