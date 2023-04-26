/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    // map key and alphabet
    const hashMap = {};
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const trimedKey = key.replace(/\s/g, '');
    for (let i = 0; i < trimedKey.length; i++) {
        if (!hashMap[trimedKey[i]]) {
            hashMap[trimedKey[i]] = null;
        }
    }

    Object.keys(hashMap).forEach((key, index) => {
        hashMap[key] = alphabet[index];
    })
    
    // If hashMap has letter in key, add value to result
    // if letter is space. add space to result
    let result = '';
    [...message].forEach((letter) => {
        !hashMap[letter] ? result += " " : result += hashMap[letter];
    })

    return result;
    
};