/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
const findFinalValue = (nums, original) => {
    let multiple = original;
    while (nums.indexOf(multiple) >= 0) {
      multiple = multiple * 2;
    }
    return multiple;
};