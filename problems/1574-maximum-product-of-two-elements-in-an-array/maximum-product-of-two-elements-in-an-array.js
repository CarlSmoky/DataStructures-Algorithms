/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
    if (nums.length === 2) return (nums[0] - 1) * (nums[1] - 1);
    let maxProduct = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const tmpProduct = (nums[i] - 1) * (nums[j] - 1);
            maxProduct = Math.max(maxProduct, tmpProduct);
        }
    }
    return maxProduct;
};