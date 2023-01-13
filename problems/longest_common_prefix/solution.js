/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (!strs.length) return "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      if (strs[0][i] !== s[i]) {
        return s.slice(0, i);
      }
    }
  }
  return strs[0];
}