/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    const hashMap = new Map();
    for (let n of nums) {
        if (!hashMap.get(n)) {
            hashMap.set(n, true);
        }
    }
    

    for (let i = 0; i < nums.length + 1; i++) {
        if (!hashMap.get(i)) return i;
    }
};