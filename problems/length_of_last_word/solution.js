/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  //trim end and // slice
  const arrStr = s.trimEnd().split(" ");
  // count last string
  return arrStr[arrStr.length - 1].length;
};