/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = arr => {
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        if (isOdd(arr[i]) && isOdd(arr[i + 1]) && isOdd(arr[i + 2])) return true;
    }
    return false;
};

const isOdd = num => {
    return num % 2 !== 0;
}