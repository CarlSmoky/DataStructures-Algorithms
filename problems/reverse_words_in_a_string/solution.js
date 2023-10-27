/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = s => {
    const clean = s.trim().split(' ')
    let result = []
    for (let i = clean.length - 1; i >= 0; i--) {
        if (clean[i] !== "") {
            result.push(clean[i])
        }
    }
    return result.join(" ")
};