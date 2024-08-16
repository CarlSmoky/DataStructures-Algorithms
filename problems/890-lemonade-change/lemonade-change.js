/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = (bills) => {
    const billCount = {};
    for (let bill of bills) {
        if (bill === 10) {
            if (!billCount[5]) return false;
            billCount[5] = billCount[5] - 1;
        } 
        if (bill === 20) {
            if (billCount[5] > 0 && billCount[10] > 0) {
                billCount[5] = billCount[5] - 1;
                billCount[10] = billCount[10] - 1;
            } else if (billCount[5] > 2) {
                billCount[5] = billCount[5] - 3;
            } else {
                return false
            }
        }
        billCount[bill] = (billCount[bill] || 0) + 1;
    }
    return true;
};