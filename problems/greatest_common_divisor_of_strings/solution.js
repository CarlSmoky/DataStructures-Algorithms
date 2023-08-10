/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {
    //base case
    if(str1 + str2 != str2 + str1)
    return "";
    const gcd = (x, y) => {
        //if y is 0 then x is the gcd//
        if (y === 0) {
            return x;
        }
        else {
            //return the remainder of x & y which will be the gcd in our case
            return gcd(y, x % y) 
        }
    }
    //create a variable to store gcd//
    const value = gcd(str1.length, str2.length)
    //using slice method which cuts our string an index before the gcd
    return str1.slice(0, value); 
};