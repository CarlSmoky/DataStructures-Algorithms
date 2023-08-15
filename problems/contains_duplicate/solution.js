/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
    const hashMap = {};
    for (let num of nums) {
        hashMap[num] = hashMap[num] ? hashMap[num] + 1 : 1;
        if (hashMap[num] > 1 ) {
            return true;
        }
    }
    return false;
};