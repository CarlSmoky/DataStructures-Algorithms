/**
 * @param {string} s
 * @return {string}
 */
const makeFancyString = (s) => {
    let res = [...s]
    for (let i = 0; i < res.length; i++) {
        if (res[i] === res[i + 1] && res[i + 1] === res[i + 2]) {
            res[i] = "";
        }
    }
    return res.join("");
};