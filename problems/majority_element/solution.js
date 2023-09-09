/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
    }
    let [maxKey, maxCount] = [0, 0]
    for ([key, value] of Object.entries(map)) {
        if (maxCount < value) {
            [maxKey, maxCount] = [key, value];
        }   
    }
    return maxKey;
};