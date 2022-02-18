/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  const string = x.toString();
  let reversed = [];
  string.split("").map(item => {
    reversed.unshift(item);
  });
  const reveresedNum = Number(reversed.join(''));
  return reveresedNum === x;
};