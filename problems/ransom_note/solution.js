/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    const hashRansomeNote = countLetterMap(ransomNote);
    const hashMagazine = countLetterMap(magazine);
    for (let [key, value] of Object.entries(hashRansomeNote)) {
      if (!hashMagazine[key] || hashMagazine[key] < value) return false;
    }
    return true;
};

const countLetterMap = str => {
  return [...str].reduce((acc, cur) => {
    return { ...acc, [cur]: (acc[cur] || 0) + 1 };
  }, {});
}