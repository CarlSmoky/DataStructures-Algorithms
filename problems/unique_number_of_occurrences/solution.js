/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = (arr) => {
    const hashMap = {};
    arr.forEach(num => {
        hashMap[num] = hashMap[num] ? hashMap[num] + 1 : 1;
    })
    const values = Object.values(hashMap);
    const setValues = new Set(values);
    return values.length === setValues.size;
};