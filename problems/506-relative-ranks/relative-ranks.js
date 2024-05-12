/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = (score) => {
    let result = [];
    const sorted = [...score].sort((a, b) => b - a);
    for (let i = 0; i < score.length; i++) {
        if (score[i] === sorted[0]) {
            result = [...result, "Gold Medal"];
        } else if (score[i] === sorted[1]) {
            result = [...result, "Silver Medal"];
        } else if (score[i] === sorted[2]) {
            result = [...result, "Bronze Medal"];
        } else {
            const rank = sorted.indexOf(score[i]) + 1;
            result = [...result, String(rank)];
        }
    }
    return result;
};