/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = (nums) => {
  for (let x = 0; x <= Math.max(...nums); x++) {
    let count = 0;
    nums.forEach(value => {
      if (value >= x) {
        count ++;
      }
    })
    if (x === count) return x;
  }
  return -1;
};