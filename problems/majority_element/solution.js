/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
  // map elment and frequency
  const map = {};
  for (let e of nums) {
    if (!map[e]) {
      map[e] = 1;
    } else {
      map[e] += 1;
    }
  }
  console.log(map);
  // get most frequent element
  let frequency = 0;
  let result;
  for (let key in map) {
    if (frequency < map[key]) {
      frequency = map[key];
      result = parseInt(key);
    }
  }
  return result;
};