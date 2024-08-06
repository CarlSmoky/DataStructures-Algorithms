/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
const kthDistinct = (arr, k) => {
   const countMap = new Map();
   for (let cha of arr) {
     countMap.set(cha, countMap.get(cha) ? countMap.get(cha) + 1 : 1) 
   }

   const distinct = arr.filter(el => countMap.get(el) === 1)
   return distinct[k - 1] || "";
};