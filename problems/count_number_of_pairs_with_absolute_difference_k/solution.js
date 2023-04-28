/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 //O(n^2)
// const countKDifference = (nums, k) => {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (Math.abs(nums[i] - nums[j]) === k) count++;
//         }
//     }
//     return count;
// };

//O(n)
const countKDifference = (nums, k) => {
    let map = new Map()
    for(let i = 0; i< nums.length; i++){
        map.set(nums[i] , (map.get(nums[i]) ) +1 || 1)
    }
    
    let count = 0
    for(let i = 0; i< nums.length; i++){
        if(map.has(nums[i] - k)){
            count += map.get(nums[i] - k)
        }
    }
    return count;
}
