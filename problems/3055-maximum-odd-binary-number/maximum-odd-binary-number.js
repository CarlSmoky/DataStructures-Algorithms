/**
 * @param {string} s
 * @return {string}
 */
const maximumOddBinaryNumber = (s) => {
    const count = {}
    for (let n of s) {
        count[n] = (count[n] || 0) + 1
    }
    
    if (!count[0]) {
        return  Array(count[1]).fill(1).join("")
    }
    const getNumOfOne = count[1] - 1;
    const tmpOne = Array(getNumOfOne).fill(1)
    const tmpZero = Array(count[0]).fill(0)
    return tmpOne.concat(tmpZero).concat(1).join("")
    
    

};