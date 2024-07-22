/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers  = (matrix) => {
    let rows = []
    for (let i = 0; i < matrix.length; i++) {
        let rowMin = Infinity;
        for (let j = 0; j < matrix[0].length; j++) {
            rowMin = Math.min(rowMin, matrix[i][j])
        }
        rows.push(rowMin)
    }
    
    let cols = []
    for (let j = 0; j < matrix[0].length; j++) {
        let colMax = - Infinity;
        for (let i = 0; i < matrix.length; i++) {
            colMax = Math.max(colMax, matrix[i][j])
        }
        cols.push(colMax)
    }

    for (let r of rows) {
        for (let c of cols) {
            if (r === c){
                return [r];
            }
        }
    }
    return []
};