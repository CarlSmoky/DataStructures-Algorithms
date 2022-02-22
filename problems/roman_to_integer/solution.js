/**
 * @param {string} s
 * @return {number}
 */
const symbleOrder = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const roman = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};
const romanToInt = (s) => {
  const arr = s.split('');
  let sum = 0;
  arr.forEach((e, i) => {
    if (symbleOrder.indexOf(e) < symbleOrder.indexOf(arr[i + 1])) {
      sum += (roman[arr[i + 1]] - roman[e]);
      sum -= roman[arr[i + 1]];
    } else {
      sum += roman[e];
    }
  }
  );
  return sum;
};
    
    
    
    