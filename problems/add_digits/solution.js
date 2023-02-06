/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
   while (num >= 0)
    {
        if (num <= 9) return num;
        let myFunc = number => Number(number);
        let arr = Array.from(String(num), myFunc);
        let new_num = arr.reduce((acc, item) => acc + item, 0);
        num = new_num;
    } 
};