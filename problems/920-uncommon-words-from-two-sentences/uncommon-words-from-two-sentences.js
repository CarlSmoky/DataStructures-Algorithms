/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
const uncommonFromSentences = (s1, s2) => {
    const arr1 = s1.split(" ");
    const arr2 = s2.split(" ");
    const count = new Map()
    for (let i = 0; i < arr1.length; i++) {
        count.set(arr1[i], count.has(arr1[i]) ?  count.get(arr1[i]) + 1 : 1 )
    }
    for (let i = 0; i < arr2.length; i++) {
        count.set(arr2[i], count.has(arr2[i]) ?  count.get(arr2[i]) + 1 : 1)
    }

    return [...count].filter(([key, value]) => value === 1).map(([key]) => key);
};