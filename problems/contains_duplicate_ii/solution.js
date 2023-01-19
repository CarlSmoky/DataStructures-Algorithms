/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
  // map nums and 
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = [i]; // create an array of indices for each value
    } else {
      
      // if (i - map[nums[i]][map[nums[i]].length - 1] <= k) return true
      // i = 1
      let value = nums[i]; // 7
      let arrayOfIndicesForValue = map[value]; // [0]
      let sizeOfArray = arrayOfIndicesForValue.length; // 1
      let indexOfLastValueInArray = sizeOfArray - 1; // 0
      if (i - arrayOfIndicesForValue[indexOfLastValueInArray] <= k) {
        // if ((1 - 0) <= k)
        return true
      }
      map[nums[i]].push(i); // add new index to array of indices at our value
    }
  }
  return false;
};