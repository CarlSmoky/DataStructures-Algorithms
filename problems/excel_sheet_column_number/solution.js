/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = (columnTitle) => {
  const charCodeBase = 'A'.charCodeAt(0) - 1;
    const len = columnTitle.length;
    let result = 0;
    //  Column number of "AB" = 1 * 26^1 + 2 * 26^0 
    for (let i = 0; i < len; i++) {
      result += (columnTitle.charCodeAt(i) - charCodeBase) * Math.pow(26, len - i - 1);
    }
    return result;
};