/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = (names, heights) => {
    const heightMap = []
    for (let i = 0; i < names.length; i++) {
        heightMap[i] = [names[i], heights[i]];
    };
    const sorted = heightMap.sort((a,b) => b[1] - a[1])
    let result = [];
    sorted.forEach(el => result.push(el[0]))
    return result;
};