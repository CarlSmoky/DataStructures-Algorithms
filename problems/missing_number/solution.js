/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
   const newNums = nums.sort((a, b) => a - b);
   let arr = [];
   for (let i = 0; i <= nums.length; i++) {
      arr.push(i);
   }
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== newNums[i]) return arr[i];
   }
};