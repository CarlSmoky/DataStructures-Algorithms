/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = (nums) => {
    let arr = [];
  for (let i = 0; i < nums.length; i = i + 2) {
    let freq = nums[i];
    let val = nums[i + 1];
    while (freq !== 0) {
      arr.push(val);
      freq--;
    }
  }
  return arr;
};