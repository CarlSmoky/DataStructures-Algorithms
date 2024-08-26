/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = (nums, k) => {
    let result = 0;
    const hashMap = new Map();
    for (let n of nums) {
        const diff = k - n;
        if (hashMap.get(diff) > 0) {
            hashMap.set(diff, hashMap.get(diff) - 1);
            result++;
        } else {
            hashMap.set(n, (hashMap.get(n) || 0) + 1)
        }
    }
    return result;
};
