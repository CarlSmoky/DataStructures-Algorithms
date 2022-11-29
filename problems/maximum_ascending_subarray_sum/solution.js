/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAscendingSum = (nums) => {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i] ;
    let j = i;
    while (j <= nums.length) {
      if (nums[j] < nums[j + 1]) {
        sum += nums[j + 1];
        j++;
      } else {
        break;
      }
    }
    arr = [...arr, sum];
  }
  return Math.max(...arr);
};