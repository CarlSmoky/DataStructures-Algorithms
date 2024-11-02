/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 const longestOnes = (nums, k) => {
    let countZero = 0;
    let l = 0
    let maxLength = 0;
    for (let r = 0; r < nums.length; r++) {
        if(nums[r] === 0) {
            countZero ++;
        }
        while (countZero > k) {
            if (nums[l] === 0) {
                countZero --
            }
            l ++
        }
        maxLength = Math.max(maxLength, r - l + 1)
    }
    return maxLength;
};