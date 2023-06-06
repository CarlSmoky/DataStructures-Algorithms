/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
const chunk = (arr, size) => {
    let result = [];
    let index = 0;

    while (index < arr.length) {
        result.push(arr.slice(index, index + size));
        index += size;
    }
    return result;
};