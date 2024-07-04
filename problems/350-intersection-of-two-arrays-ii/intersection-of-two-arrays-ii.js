/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
    const count = {}
    for (let n of nums1) {
        count[n] = (count[n] || 0) + 1;
    }

    let result = [];
    for (let n of nums2) {
        if (count[n] > 0) {
            count[n] -= 1;
            result = [...result, n];
        }
    }
    return result;
};