/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    //  map nums and count as value
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        map[current] = map[current] ? map[current] + 1 : 1;
        // if  count is bigger that n / 2, return key
        if (map[current] > nums.length / 2) return current;
    }
};