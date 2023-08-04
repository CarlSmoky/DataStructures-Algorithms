/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kthFactor = (n, k) => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            arr.push(i);
        }
        if (arr[ k -1 ]) return arr[ k -1 ];
    }
    return -1;
};