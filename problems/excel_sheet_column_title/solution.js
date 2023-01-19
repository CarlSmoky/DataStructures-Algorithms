/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = (columnNumber) => {
  let newStr = "";
    while(columnNumber > 0){
      columnNumber--;
        let charCode = String.fromCharCode((columnNumber % 26) + 65);
        newStr = charCode + newStr;
        columnNumber = Math.floor(columnNumber/ 26); 
    }
    
    return newStr;
};