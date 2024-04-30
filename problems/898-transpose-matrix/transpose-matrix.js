/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = (matrix) => {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let tmp = [];
        for (let j = 0; j < matrix.length; j++) {
            tmp = [...tmp, matrix[j][i]];
        }
        result = [...result, tmp];
    }
    return result;
};