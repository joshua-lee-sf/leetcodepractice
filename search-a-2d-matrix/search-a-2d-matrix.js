/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let top = 0; bottom = rows - 1;

    while(top <= bottom){
        let row = Math.floor((top + bottom) / 2);
        if (target > matrix[row][cols - 1]){
            top = row + 1;
        } else if (target < matrix[row][0]){
            bottom = row - 1;
        } else {
            break;
        }
    }

    if (!(top <= bottom)) return false;

    let row = Math.floor((top + bottom) / 2);
    let l = 0, r = cols - 1;
    while (l <= r){
        let m = Math.floor((l + r) / 2);
        if (target > matrix[row][m]){
            l = m + 1;
        } else if (target < matrix[row][m]){
            r = m - 1;
        } else if (target === matrix[row][m]) {
            return true;
        }
    }

    return false;

};