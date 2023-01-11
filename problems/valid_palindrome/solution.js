/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  const newString = s.replace(/[^A-Z0-9]/ig, "").toLocaleLowerCase();
  let left = 0;
  let right = newString.length -1
  while(left < right){
    if (newString[left] !== newString[right]) return false;
    else {
      left++; // increment left to move forward
      right--; // decrement right so we can reach the center/mid
    }
  }
  return true;
};