/**
 * @param {string} s
 * @return {boolean}
 */
const brackets = {
  ')' : '(',
  '}' : '{',
  ']' : '['
}
const isValid = (s) => {
  let arr = [];
  const values = Object.values(brackets);
  
  for (let i = 0; i < s.length; i++) {
    if (values.indexOf(s[i]) !== -1) {
      arr = [...arr, s[i]];
    } else {
      if (arr[arr.length -1] === brackets[s[i]]) {
        arr.pop();
      } 
      else return false;
    }
  }
  
  return arr.length === 0 ? true : false;
  
};