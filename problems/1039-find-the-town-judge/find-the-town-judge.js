/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = (n, trust) => {
    if (trust.length === 0 && n > 1) return -1;
    if (n === 1) return n;
   let pSet = new Set();
   for (let i = 0; i < trust.length; i++) {
        pSet.add(trust[i][0])
   }
   let suspect = 0
   for (let i = 1; i <= n; i++) {
        if (!pSet.has(i)) {
            suspect = i
        }
   }
   if (suspect.length === 0) return -1;
    
   const hashMap = {};
   for (let i = 0; i < trust.length; i++) {
        if (!hashMap[trust[i][0]]) {
            hashMap[trust[i][0]] = [trust[i][1]]
        } else {
            hashMap[trust[i][0]].push(trust[i][1])
        }
   }
   for (const [key, value] of Object.entries(hashMap)) {
        console.log(suspect, value, value.indexOf(suspect))
        if(value.indexOf(suspect) === -1) return -1
   }
    return suspect;
};