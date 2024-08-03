/**
 * @param {string[]} details
 * @return {number}
 */
const countSeniors = (details) =>{
    return details.filter((e) => {
        const age = parseInt(e[11] + e[12]);
        return age > 60;
    }).length;
};