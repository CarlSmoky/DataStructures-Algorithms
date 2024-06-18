/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
    const count = new Map();
    for (let n of nums) {
        count.has(n) ? count.set(n, count.get(n) + 1) : count.set(n, 1);
    }

    let j = 0;
    for (let x = 0 ; x < 3 ; x++){
        for (let i = 0 ; i < count.get(x); i++){
            nums[j] = x;
            j++;
        }
    }
};