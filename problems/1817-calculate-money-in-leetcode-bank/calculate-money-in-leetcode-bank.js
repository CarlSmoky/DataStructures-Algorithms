/**
 * @param {number} n
 * @return {number}
 */
const totalMoney = (n) => {
    let day = 1;
    let week = 0;
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += week + day;
        day++;
        if (i % 7 === 0) {
            week++;
            day = 1;
        }
        i++;
    }
    return sum;
};