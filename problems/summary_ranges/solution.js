/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = nums => {
    let arr =[]
    let result =[]
    for(let i = 0; i < nums.length; i++){
       if(nums[i] + 1 === nums[i + 1]){
        arr.push(nums[i])
       }else if(nums[i] + 1 !== nums[i + 1] && nums[i] === nums[i - 1] + 1){
            arr.push(nums[i])
            result.push(arr)
            arr=[]
       }else{
        result.push(nums[i])
       }
    }
    for(let j = 0; j < result.length; j++){
        if(Array.isArray(result[j])){
                result[j] = `${result[j][0]}->${result[j][result[j].length - 1]}`
        }else{
                result[j] = `${result[j]}`
        }
    }
    return result
};