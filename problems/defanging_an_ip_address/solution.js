/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let result = [];
  [...address].forEach(el => {
    el === '.' ? result.push('[.]') : result.push(el);
  })
  return result.join('');  
};