/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    const n = nums.length;
    const result = [];

    let prefixProduct = 1;
    for(let i = 0; i < n; i++) {
        result[i] = prefixProduct;
        prefixProduct *= nums[i];
    }

    let suffixProduct = 1;
    for(let i = n - 1; i >= 0; i--) {        
        result[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }

    return result;
};