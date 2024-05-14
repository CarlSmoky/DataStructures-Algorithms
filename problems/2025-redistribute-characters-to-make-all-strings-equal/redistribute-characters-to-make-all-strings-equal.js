/**
 * @param {string[]} words
 * @return {boolean}
 */
const makeEqual = (words) => {
    if (words.length === 1) return true;
    const chaCount = {};
    for (let arr of words) {
        for (let cha of arr) {
           chaCount[cha] = (chaCount[cha] || 0) + 1; 
        }
    }
    const values = Object.values(chaCount);
    for (let val of values) {
        if (val % words.length !== 0) {
            return false;
        }
    }
    return true;
    // return values.every(count => count % words.length === 0);
};