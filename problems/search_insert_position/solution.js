/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  
  // iterate nums and find target and return index
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }

  // if target is not in nums, 
  let current = 0;
  let next = current + 1;
  while (current < nums.length) {
    if (nums[current] < target && target < nums[next] || nums[current] < target && current === nums.length - 1) {
      return current + 1;
    } else if (nums[current] > target && current === 0 || nums[current] > target && nums[next] < target){
      return current;
    } else {
      console.log("3");
      current++;
      next++;
    }
  }
};