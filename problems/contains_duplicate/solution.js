/**
 * @param {number[]} nums
 * @return {boolean}
 */

//  0(n)
// const containsDuplicate = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     const rest = nums.slice(i + 1);
//       return rest.includes(nums[i]);
//   }
// }

const containsDuplicate = (nums) => {
  const mySet = new Set(nums);
  return mySet.size !== nums.length;
}