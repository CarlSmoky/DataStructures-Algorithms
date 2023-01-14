/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
let i = 0;
  while (true) {
    if (i * i === x) {
      return i;
    } else if (i * i > x) {
      return i - 1;
    }
    i++;
  }
};