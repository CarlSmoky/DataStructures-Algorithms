/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {
    let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    [...stones].forEach(stone => {
      if (jewels[i] === stone) {
        count++;
      }
    })
  }
  return count;
};