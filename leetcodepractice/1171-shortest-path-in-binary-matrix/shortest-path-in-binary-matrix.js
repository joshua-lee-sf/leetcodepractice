/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const N = grid.length
    const visited = new Set();
    const queue = [];
    queue.push([0,0,1]);
    visited.add('0,0');
    const directions = [[0,1], [0, -1], [1,0], [-1,0], 
                        [1,1], [1,-1], [-1,1], [-1, -1]]

    while (queue.length > 0) {
        let [r, c, length] = queue.shift();

        if (Math.min(r,c) < 0 || 
        Math.max(r,c) >= N || 
        grid[r][c] ) {
            continue;
        }
        if (r === N - 1 && c === N - 1) return length;

        for (const [dr,dc] of directions){
            const newRow = r + dr;
            const newCol = c + dc;
            if (!visited.has(`${newRow}, ${newCol}`)){
                queue.push([newRow, newCol, length + 1]);
                visited.add(`${newRow}, ${newCol}`)
            }
        }
    }
    return -1
};