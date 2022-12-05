/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = (nums) => {

  const mapObj = nums.reduce((obj, num) => {
    return { ...obj, [num]: (obj[num] || 0) + 1 }
  }, {})

  let sort = Object.entries(mapObj).sort((a, b) => {
    if ((a[1]) === (b[1])) {
      return (b[0]) - (a[0]);
    } else {
      return (a[1]) - (b[1]);
    }
  })
  let result = [];
  sort.forEach(el => {
    let i = el[1];
    while (i > 0) {
      result = [...result, Number(el[0])];
      i -= 1;
    }
  })
  return result;
};