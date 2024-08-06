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

   let distinct = []
   for (let [key, value] of countMap.entries()){
        if (value === 1) {
            distinct = [...distinct, key]
        }
   }
   return distinct[k - 1] ? distinct[k - 1] : ""
};