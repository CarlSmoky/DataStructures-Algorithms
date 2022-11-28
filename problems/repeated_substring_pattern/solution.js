/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = (s) => {
  for(let i = parseInt(s.length / 2); i >= 1; i--){
    if(s.length % i === 0){
        let j = i;
        const sub = s.substring(0, j);
        while(s.indexOf(sub, j) == j) {
          j += i;
          if(j == s.length) return true;
        }
    }
}
return false;
};