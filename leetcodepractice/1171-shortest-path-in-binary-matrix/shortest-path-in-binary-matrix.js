/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const N = grid.length;
    const queue = [];
    const visited = new Set();
    const directions = [[0,1], [0,-1], [1,0], [-1,0],
                        [1,1], [1,-1], [-1,1], [-1,-1]]
    queue.push([0,0,1]);
    visited.add('0,0');

    while (queue[0]) {
        let [r,c,length] = queue.shift();

        // check to see if r,c is within the bounds and not 0
        if (Math.min(r,c) < 0 || Math.max(r,c) >= N || grid[r][c]){
            continue;
        }
        // check to see if we reached the end 
        if (r === N - 1 && c === N - 1) return length;

        // loop through possible directions
        for (let [dr, dc] of directions) {
            const newRow = r + dr;
            const newCol = c + dc;

            if (!visited.has(`${newRow}, ${newCol}`)) {
                queue.push([newRow, newCol, length + 1]);
                visited.add(`${newRow}, ${newCol}`);
            }
        }
    }

    // if the program loops through the entire iteration and couldnt return the length, it's not possible
    return -1
};