/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const countLetters = [...s].reduce((acc, cur) => {
    return { ...acc, [cur]: (acc[cur] + 1 || 1) }
  }, {})
  
  const letters = Object.keys(countLetters);
  if (letters.length === 1) return countLetters[letters[0]];
  const oddNumLetterArr = Object.values(countLetters).filter(value => value % 2 !== 0);
  const initialNum = (letters.length === 3 && oddNumLetterArr.length > 0) || oddNumLetterArr.length > 0 ? 1 : 0;
  return Object.values(countLetters).reduce((acc, cur) => {
    return cur % 2 === 0 ? acc + cur : acc + cur - 1;
  }, initialNum)
};