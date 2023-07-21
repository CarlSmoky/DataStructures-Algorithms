/**
 * @param {string[]} strs
 * @return {string}
 */
// const longestCommonPrefix = strs => {
//     for (let i = 0; i < strs[0].length; i++) {
//         for (let j = 1; j < strs.length; j++) {
//             if (strs[0][i] !== strs[j][i]) {
//                 return strs[0].slice(0, i)
//             }
//         }
//     }
//     return strs[0];
// };

const longestCommonPrefix = strs => {
    let i = 1;
    let prf = strs[0];
    while(i < strs.length){
        console.log(i)
        console.log(prf)
        if(!strs[i].startsWith(prf)){
            prf = prf.slice(0, -1)
        }else{
            i++
        }
    }
    return prf
};