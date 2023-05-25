/**
 * @param {number[]} nums
 * @return {number}
 */
// const pivotIndex = (nums) => {
//     for (let tmpPivotIndex = 0; tmpPivotIndex < nums.length; tmpPivotIndex++) {
//         const left = nums.slice(0, tmpPivotIndex);
//         const right = nums.slice(tmpPivotIndex + 1);
//         const leftSum = left.reduce((acc, cur) => acc + cur, 0);
//         const rightSum = right.reduce((acc, cur) => acc + cur, 0);
//         if (leftSum === rightSum) return tmpPivotIndex;
//     }
//     return -1;
// };

const pivotIndex = (nums) => {
    const total = nums.reduce((acc, cur) => acc + cur, 0);
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        const rightSum = total - leftSum - nums[i];
        if (leftSum === rightSum) return i;
        leftSum += nums[i];
    }
    return -1;
};
    