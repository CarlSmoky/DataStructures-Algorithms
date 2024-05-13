/**
 * @param {string} s
 * @return {number}
 */
const maxScore = (s) => {
    let countOne = 0;
    let countZero = 0;
    let maxTotal = -Infinity;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '1') {
            countOne++;
        } else {
            countZero++;
        }
        maxTotal = Math.max(maxTotal, countZero - countOne);
    }

    if (s[s.length - 1] === '1') {
        countOne++;
    }

    return maxTotal + countOne;
}