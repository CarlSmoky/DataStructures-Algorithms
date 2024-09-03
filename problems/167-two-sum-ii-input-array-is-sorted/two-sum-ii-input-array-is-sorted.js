/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
    let l = 0;
    let r = numbers.length - 1;
    while (l < r) {
        if (numbers[l] + numbers[r] === target) return [l + 1, r + 1];
        if (numbers[l] + numbers[r] < target) {
            l ++;
        } else {
            r --;
        }
    }
};