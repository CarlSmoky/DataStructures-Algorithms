/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
    let left = 0;
    let right = 0;

    while(right < nums.length){
        if(nums[right] !== 0){
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            right++;
            left++;
        } else {
            right++;
        }
    }
};