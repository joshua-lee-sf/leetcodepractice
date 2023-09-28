/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // initialize queue
    const queue = [];
    // initialize time and fresh variables
    let [time, fresh] = [0,0];
    // set the ROW and COL size as constants
    const [ROWS, COLS] = [grid.length, grid[0].length];
    // directions grid to iterate through
    const directions = [[0,1], [0,-1], [1,0], [-1,0]]

    // iterate through the entire grid and look for fresh fruits, increment by 1 when there's a fresh fruit
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === 1) fresh++;
            if (grid[i][j] === 2) queue.push([i,j]);
        }
    }

    while (queue.length > 0 && fresh > 0) {
        let queueLength = queue.length
        // iterate through everyting inside the queue
        for (let i = 0; i < queueLength; i++) {
            // pop out the first element in the queue and assign them to r & c
            let [r,c] = queue.shift();

            // iterate through the directions variable (every move possible)
            for (const [dr, dc] of directions) {

                // create the new directions we'll be moving
                const newRow = r + dr;
                const newCol = c + dc;

                // if the newRow and newCol is out of bounds, continue to the next iteration
                if (newRow < 0 || 
                    newRow >= ROWS || 
                    newCol < 0 || 
                    newCol >= COLS ||
                    grid[newRow][newCol] !== 1) {
                        continue;
                    }
                // if in bounds and fresh, make rotten
                grid[newRow][newCol] = 2;
                // push new coordinates into queue
                queue.push([newRow, newCol]);
                // decrement fresh by 1
                fresh--;
            }
        }
        // increment time by 1 once it finishes through the first element in the queue
        time++;
    }

    // if there are still fresh oranges, that means it's impossible to rot all so return -1, otherwise return the time it took.
    return fresh === 0 ? time : -1;
};