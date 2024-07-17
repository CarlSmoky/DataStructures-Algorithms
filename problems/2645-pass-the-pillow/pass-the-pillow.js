/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
const passThePillow = (n, time) => {
    let i = 0;
    let current = 0;
    let directionUp = true;
    while (current <= time) {
        if (directionUp && i === n) {
            directionUp = false;
        }
        if (!directionUp && i === 1) {
            directionUp = true;
        }
        directionUp ? i++ : i--;
        current ++;
    }
    return i;
};