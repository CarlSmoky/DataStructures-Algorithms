/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = (nums, k) => {
   let start= 0;
   let count = 0;
   let max = 0;

   for (let end = 0; end < nums.length; end++) {
        if (nums[end] === 0) count ++;
        if (count > k) {
            if (nums[start] === 0) count --;
            start ++
        }
        max = Math.max(max, end - start + 1)
   }
   return max;
 
};