/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = (names, heights) => {
    const arr = []
    for (let i = 0; i < names.length; i++) {
        arr[i] = [names[i], heights[i]];
    };
    return arr.sort((a,b) => b[1] - a[1]).map(e => e[0])
};