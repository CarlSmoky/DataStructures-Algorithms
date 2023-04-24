/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const hashMap = {};
    for (let sLetter of s) {
        !hashMap[sLetter] ? hashMap[sLetter] = 1 : hashMap[sLetter]++
;
    }
    for (let tLetter of t) {
        if (!hashMap[[tLetter]]) return tLetter;
        hashMap[[tLetter]]--;
    }
};