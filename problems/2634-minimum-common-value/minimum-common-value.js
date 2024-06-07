/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const getCommon = (nums1, nums2) => {
    // Set
    // const setNums1 = new Set(nums1);
    // for (let n of nums2) {
    //     if (setNums1.has(n)) return n;
    // }
    // return -1;

    // Two pointer
    let firstIndex = 0;
    let secondIndex = 0;
    while (firstIndex < nums1.length && secondIndex < nums2.length) {
        if (nums1[firstIndex] === nums2[secondIndex]) return nums1[firstIndex];
        nums1[firstIndex] < nums2[secondIndex] ? firstIndex++ : secondIndex++;
    }
    return -1;
};