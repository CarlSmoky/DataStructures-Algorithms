/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
const sortJumbled = (mapping, nums) => {
    const numPairs = nums.map((el) => {
        let strNum = el.toString();
        let altNum = "";
        for (let i = 0; i < strNum.length; i++) {
            altNum += mapping[parseInt(strNum[i])]
        }
        return [el, parseInt(altNum)]
    })

    return  numPairs.sort((a, b) => a[1] - b[1]).map(e => e[0]);
};

