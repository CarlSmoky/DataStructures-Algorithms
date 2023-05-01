/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
// const countConsistentStrings = (allowed, words) => {
//     let count  = 0;
//     words.forEach(word => {
//         let i= 0;
//         while(i < word.length){
//             if(!allowed.includes(word[i])) break;
//             i ++;
//         }
//         if(i === word.length) count++;
//     })
//     return count;
// };

const countConsistentStrings = (allowed, words) => {
    let count = 0;
    let str = new Set(allowed.split(""));
    for (let letter of words) {
        if(letter.split("").every((c) => str.has(c))) {
            count++;
        }
    }
    return count;
}