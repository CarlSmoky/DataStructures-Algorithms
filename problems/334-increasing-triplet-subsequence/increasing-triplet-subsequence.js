/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = nums => {
    let firstNumber = Infinity;
    let secondNumber = Infinity;

    for (let currentNumber of nums) {
        if (currentNumber > secondNumber && currentNumber > firstNumber) {
            return true;
        }
        if (currentNumber > firstNumber) {
            secondNumber = currentNumber;
        } else {
            firstNumber = currentNumber;
        }
    }
    return false;
};