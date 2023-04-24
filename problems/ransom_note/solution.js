/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const hashMap = {};
    for (let i = 0; i < magazine.length; i++) {
        !hashMap[magazine[i]] ? hashMap[magazine[i]] = 1 : hashMap[magazine[i]]++;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (!hashMap[ransomNote[i]]) return false;
        hashMap[ransomNote[i]]--;
    }
    return true;
};