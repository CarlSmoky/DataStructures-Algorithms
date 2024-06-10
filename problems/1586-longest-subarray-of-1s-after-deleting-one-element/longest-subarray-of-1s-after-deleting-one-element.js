/**
 * @param {number[]} nums
 * @return {number}
 */
 const longestSubarray = (nums) => {
    let l = 0;
    let result = 0;
    let zeroCount = 0;
    for(let r = 0; r < nums.length; r++){     
        if(nums[r] === 0){
            zeroCount++
        }

        if(zeroCount > 1){
            if(nums[l] === 0){
                zeroCount--;
            }
            l++;
        }
        
        if(zeroCount <= 1){
            result = Math.max(result, r - l);
        }
    }
    return result;
};