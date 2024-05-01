/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = (arr) => {
    const count = {};
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] = (count[arr[i]] || 0)  + 1;
    }
    const threshold = arr.length * 0.25;
    for (let [key, value] of Object.entries(count)) {
        if (value > threshold) return key;
    }
};