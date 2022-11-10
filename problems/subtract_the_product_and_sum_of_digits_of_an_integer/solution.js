/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = n => {
    let myFunc = num => Number(num);
  const intArr = Array.from(String(n), myFunc);
  const multiple = intArr.reduce((acc, cur) => acc * cur, 1);
  const sum = intArr.reduce((acc, cur) => acc + cur, 0);
  return multiple - sum;
};