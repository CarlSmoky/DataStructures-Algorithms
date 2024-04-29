/**
 * @param {string} num
 * @return {string}
 */
const largestOddNumber = (num) => {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) {
            return [...num].splice(0, i + 1).join("");
        }
    }
    return "";
};