/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
    m = parseInt((l + r) / 2)
    
    if (nums[m] > target) {
      r = m;
      r --;
    } else if (nums[m] < target) {
      l = m;
      l ++;
    } else {
      return m;
    }
  }
  return -1;
};