/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = (names, heights) => {
    let arr = [];
    for (let i = 0; i < names.length; i++) {
        let tmp = [names[i], heights[i]];
        arr.push(tmp);
    }
    return arr.sort((a, b) => b[1] - a[1]).map(e => e[0]);
    

};