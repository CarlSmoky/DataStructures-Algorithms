/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  // iterate through nums
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    // if element is eqaul to val, splice from nums and push "-"
    if (nums[i] === val) {
      nums.splice(i, 1);
      nums.push("_");
      i--;
      len--;
    }
  }
  return len;
};