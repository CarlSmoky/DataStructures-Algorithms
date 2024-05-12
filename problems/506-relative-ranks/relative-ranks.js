/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = (score) => {
    const sorted = [...score].sort((a, b) => b - a);
    const map = {};
    const ranking = ["Gold Medal","Silver Medal","Bronze Medal"]

    for (let i = 0; i < sorted.length; i++) {
        if (i < 3) {
            map[sorted[i]] = ranking[i];
        } else {
            map[sorted[i]] = String(i + 1);
        }
    }
    return score.map(el => map[el])
};