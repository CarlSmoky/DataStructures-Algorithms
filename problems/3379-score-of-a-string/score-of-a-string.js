/**
 * @param {string} s
 * @return {number}
 */
const scoreOfString = (s) => {
    let score = 0;
    for (let i = 0; i < s.length - 1; i++) {
        const fisrtCharCode = s.charCodeAt(i);
        const secondCharCode = s.charCodeAt(i + 1);
        score += Math.abs(fisrtCharCode - secondCharCode);
    }
    return score;
    
};