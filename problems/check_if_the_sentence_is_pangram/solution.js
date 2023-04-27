/**
 * @param {string} sentence
 * @return {boolean}
 */
// const checkIfPangram = (sentence) => {
//     //iterate through sentence, make map key is letter and value is true
//     let map = new Map();
//     for (let letter of sentence) {
//         map.set(letter, true); 
//     }
    
//     // if size of map is 26, return true, if not return false
//     return map.size === 26;

// };

const checkIfPangram = (sentence) => {
    //iterate through sentence, make set
    // let set = new Set();
    // for (let letter of sentence) {
    //     set.add(letter); 
    // }
    
    // if size of map is 26, return true, if not return false
    // return set.size === 26;

    //Refactor
    return new Set([...sentence]).size === 26;

};