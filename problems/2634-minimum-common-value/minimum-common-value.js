/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const getCommon = (nums1, nums2) => {
    const setNums1 = new Set(nums1);
    for (let n of nums2) {
        if (setNums1.has(n)) return n;
    }
    return -1;
};