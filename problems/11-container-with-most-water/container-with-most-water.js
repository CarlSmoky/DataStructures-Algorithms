/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    let result = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        const aria = (right - left) * Math.min(height[left], height[right]);
        result = Math.max(result, aria)
        height[left] > height[right] ? right-- : left++;
    }
    return result;
};