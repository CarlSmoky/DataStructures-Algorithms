/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString =  (s, indices) => {
    let mapObj = {};
  for (let i = 0; i < s.length; i++) {
    mapObj[indices[i]] = s[i];
  }
  return Object.values(mapObj).join("");
};