/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  const stringfy = digits.reduce((acc, cur) => {
    return acc + cur.toString();
  }, '')
  const sum = BigInt(stringfy) + BigInt(1);
  console.log(sum);
  const intArr = Array.from(String(sum), num => parseInt(num));
  return intArr;
};