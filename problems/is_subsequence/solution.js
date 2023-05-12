/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// const isSubsequence = (s, t) => {
//     let arr = [];
//     for (let character of t) {
//        for (let letter of s) {
//            if (character === letter) {
//               arr = [...arr, character]; 
//            }
//        }
//     }
//     return arr.join('') === s;
// };
//Refactor
const isSubsequence = (s, t) => {
    let arr = [];
    let i = 0; j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            arr.push(t[j]);
            i++;
        }
        j++;
    }
    return arr.join('') === s;
};
