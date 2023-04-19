/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return [...s].sort().join('') === [...t].sort().join('');
};

// var isAnagram = function(s, t) {
// if (s.length !== t.length) return false
    
//     const hashTable = {}
//     for (let letter of s){
//         if (!hashTable[letter]) hashTable[letter] = 0;
//         hashTable[letter]++;
//     }

//     for (let letter of t){
//         if (!hashTable[letter]) return false;
//         hashTable[letter]--;
//     }

//     return true;
// }