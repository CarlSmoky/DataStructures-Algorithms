/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = (heights) => {
    const originalHeights = [...heights];
    const sortedHeights = heights.sort((a, b) => a- b);
    let result = 0;
    for (let i = 0; i < heights.length; i++) {
        if (originalHeights[i] !== sortedHeights[i]) result ++;
    }
    return result;
};