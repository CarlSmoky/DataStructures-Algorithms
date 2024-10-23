/**
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = arr => {
    const sortArr = [...arr].sort((a, b) => a - b);
    const rankMap = new Map();
    let rank = 1;
    
    for (let num of sortArr) {
        if (!rankMap.has(num)) {
            rankMap.set(num, rank++);
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] = rankMap.get(arr[i]);
    }
    
    return arr;
};