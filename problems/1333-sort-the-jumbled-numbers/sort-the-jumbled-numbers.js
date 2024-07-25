/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
const sortJumbled = (mapping, nums) => {
    // let myArr = []
    // for (let i = 0; i < nums.length; i++) {
    //     const stringArr = nums[i].toString()
    //     let alt = ""
    //     for (let j = 0; j < stringArr.length; j++) {
    //         const getAltNum = mapping[stringArr[j]]
    //         alt += getAltNum;
    //     }
    //     myArr = [...myArr, alt]
    // }

    const myNums = nums.map((el) => {
        let strNum = el.toString();
        let keyNum = "";
        for (let i = 0; i < strNum.length; i++) {
            keyNum += mapping[parseInt(strNum[i])]
        }
        return [el, parseInt(keyNum)]
    })

    const result = myNums.sort((a, b) => a[1] - b[1]).map(e => e[0])
    return result
    
};

