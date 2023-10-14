/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
    const arr = s.split(" ").filter(str => str.length > 0)
    return arr[arr.length - 1].length
};