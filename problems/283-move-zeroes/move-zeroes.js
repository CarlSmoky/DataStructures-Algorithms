/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
    let current = 0;
    let next = 0;

    while(next < nums.length){
        if(nums[next] !== 0){
            let temp = nums[current];
            nums[current] = nums[next];
            nums[next] = temp;
            next++;
            current++;
        } else {
            next++;
        }
    }
};