/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  // Get max number
  const maxNum = Math.max(...nums);
  // Iterate nums from 0 to max num and check if there is missiong num
  for (let i = 0; i < nums.length + 1; i++) {
    if (nums.indexOf(i) === -1) return i;
  }
};