/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = (nums1, nums2) => {
    //set nums1, nums2
    const setNums1 = new Set(nums1);
    const setNums2 = new Set(nums2);
    // check if each el has in the other set of nums for each set
    const arr1 = [...setNums1].filter(num => !setNums2.has(num));
    const arr2 = [...setNums2].filter(num => !setNums1.has(num));
    // return arrays of array
    return [arr1, arr2];
};