/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
    // iterate through nums
    for (let i = 0; i < nums.length; i++) {
    // if the el of nums is the same val, splice the el and i minus 1 
        if (nums[i] === val) {
            nums.splice(i, 1);
            i -= 1;
        }
    } 
};