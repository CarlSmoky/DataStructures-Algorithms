/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers  = (matrix) => {
    let minMax = new Set()
    for (let i = 0; i < matrix.length; i++) {
        let rowMin = Infinity;
        for (let j = 0; j < matrix[0].length; j++) {
            rowMin = Math.min(rowMin, matrix[i][j])
        }
        minMax.add(rowMin)
    }
    
    for (let j = 0; j < matrix[0].length; j++) {
        let colMax = - Infinity;
        for (let i = 0; i < matrix.length; i++) {
            colMax = Math.max(colMax, matrix[i][j])
        }
        if (minMax.has(colMax)) {
            return [colMax]
        } 
    }

    return []
};