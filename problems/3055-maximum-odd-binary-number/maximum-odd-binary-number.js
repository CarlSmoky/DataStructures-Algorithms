/**
 * @param {string} s
 * @return {string}
 */
const maximumOddBinaryNumber = (s) => {
    const count = {}
    for (let n of s) {
        count[n] = (count[n] || 0) + 1
    }

    let result = !count[0] ?  "1".repeat(count[1]) : "1".repeat(count[1] - 1) + "0".repeat(count[0]) + "1";

    return result;
};