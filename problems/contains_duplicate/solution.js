/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  console.log((new Set(nums)).size);
  return !(nums.length === (new Set(nums)).size)
}