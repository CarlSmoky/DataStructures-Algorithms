/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = (arr1, arr2) => {
    const hashMap = {};
    let remain = [];
    for (let n of arr1) {
        if (arr2.indexOf(n) !== -1) hashMap[n] = (hashMap[n] || 0) + 1;
        else remain.push(n);
    }
    remain.sort((a, b) => a - b);

    let result = [];
    for (let n of arr2) {
        const total = hashMap[n];
        result.push(...Array(total).fill(n));
    }

    return [...result, ...remain];
    
};