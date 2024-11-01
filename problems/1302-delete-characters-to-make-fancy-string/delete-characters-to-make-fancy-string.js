/**
 * @param {string} s
 * @return {string}
 */
const makeFancyString = (s) => {
    let res = s[0]
    for(let i = 1; i < s.length; i++){
        if(s[i] === s[i - 1] && s[i] === s[i + 1]){
            continue;
        } else {
            res += s[i];
        }
    }

    return res;
};