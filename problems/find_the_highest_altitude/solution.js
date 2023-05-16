/**
 * @param {number[]} gain
 * @return {number}
 */

// Time: O(n) Space: O(n)
// const largestAltitude = (gain) => {
//     let arr = [0, gain[0]];
//     for (let i = 1; i < gain.length; i++) {
//         const tmp = arr[i] + gain[i];
//         arr.push(tmp);
//     }
//     return Math.max(...arr);
// };

// Time: O(n) Space: O(1)
const largestAltitude = (gain) => {
    let maxAltitude = 0;
    let tmp = 0;
    for (let i = 0; i < gain.length; i++) {
        tmp += gain[i];
        if (maxAltitude < tmp) maxAltitude = tmp;
    }
    return maxAltitude;
};