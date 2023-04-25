/**
 * @param {number[]} nums
 * @return {number}
 */

//  O(n^2)
// var numIdenticalPairs = function(nums) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j] && i < j) {
//                 count++;
//             }
//         }
//     }
//     return count;
// };

// O(n)
var numIdenticalPairs = function(nums) {
      let obj = {};
      let counter = 0;

      for (val of nums) {
        if (obj[val]) {
          counter += obj[val];
          obj[val]++;
        } else {
          obj[val] = 1;
        }
      }
      return counter;
};