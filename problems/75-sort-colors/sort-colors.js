/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
    for(let i = 0 ;i < nums.length - 1;i++){
        for(let j = 0 ; j < nums.length - i - 1;j++){
            if(nums[j] > nums[j+1]){
                const temp = nums[j]
                 nums[j] = nums[j+1]
                 nums[j+1] = temp
            }
        }
    }
};