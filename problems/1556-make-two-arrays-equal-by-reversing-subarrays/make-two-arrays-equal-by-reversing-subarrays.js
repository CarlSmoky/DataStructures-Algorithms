/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = (target, arr) => {
    const targetCount = new Map();
    const arrCount = new Map();
    for (let i = 0; i < target.length; i++) {
        if (targetCount.get(target[i])) {
            targetCount.set(target[i], targetCount.get(target[i]) + 1)
        } else {
            targetCount.set(target[i], 1)
        }
        if (arrCount.get(arr[i])) {
            arrCount.set(arr[i], arrCount.get(arr[i]) + 1)
        } else {
            arrCount.set(arr[i], 1)
        }
    }
    
    for (let [key, value] of targetCount) {
        if (value !== arrCount.get(key)) return false;
    }
    return true;
};