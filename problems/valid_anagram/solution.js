/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    const sMap = countLetterMap(s)
    const tMap = countLetterMap(t)
    for (const [key, value] of Object.entries(sMap)) {
      if (value !== tMap[key]) return false
    }
    return true;
};

const countLetterMap = str => {
  return [...str].reduce((acc, cur) => {
    return { ...acc, [cur]: (acc[cur] || 0) + 1 };
  }, {});
}