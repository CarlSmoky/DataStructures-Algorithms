/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    return nums.map(num => {
      let count = 0;
      for(let i = 0; i < nums.length; i++) {
        if (num > nums[i]) {
          count ++;
        }
      }
      return count;
    })
};