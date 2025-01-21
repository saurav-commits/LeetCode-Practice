/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    let iterations = 0;
    let numsXY = {};
    let cols = {};
    let rows = {};

    for(let i=0; i<mat.length; i++) {
        rows[i] = mat[i].length;

        for(let j=0; j<mat[0].length;j++) {
            numsXY[mat[i][j]] = [i, j]

            if(!(j in cols)) {
                cols[j] = mat.length;
            }
        }
    }

    for(let i of arr) {
        const [x, y] = numsXY[i];

        cols[y]--;
        rows[x]--;

        if(cols[y] ===0 || rows[x] ===0) return iterations;

        iterations++;
    }

    return iterations;
};