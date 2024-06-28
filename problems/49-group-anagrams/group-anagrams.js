/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    const hashMap = new Map();
    const result = [];

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (hashMap.has(sortedStr)) {
            result[hashMap.get(sortedStr)].push(str);
        } else {
            hashMap.set(sortedStr, result.length);
            result.push([str]);
        }
    }

    return result;
};