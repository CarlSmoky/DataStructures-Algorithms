/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = (target, arr) => {
    const count = new Map();
    
    for (let i = 0; i < target.length; i++) {
        count.set(target[i], (count.get(target[i]) || 0) + 1);
        count.set(arr[i], (count.get(arr[i]) || 0) - 1);
    }

    for (let n of count.values()) {
        if (n !== 0) {
            return false;
        }
    }
    return true;
};