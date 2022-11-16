/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = arr => {
 let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    let endPos = i + 2;
    while (endPos < arr.length) {
      const sum = arr.slice(i, endPos + 1).reduce((acc, cur) => acc + cur, 0)
      result += sum;
      endPos = endPos + 2;
    }
  }
  return result;   
};