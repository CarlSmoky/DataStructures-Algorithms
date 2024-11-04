/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = (s, goal) => {
    if (s.length !== goal.length) return false;
    let arrS = [...s];
    for (let i = 0; i < s.length; i++) {
        const tmp = arrS[0]
        arrS.shift()
        arrS.push(tmp)
        if (arrS.join("") === goal) return true
    }
    return false;
};