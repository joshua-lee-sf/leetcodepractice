/**
 * @param {character[][]} grid
 * @return {number}
 */

 /*
[["1","1","1","1","0"],
 ["1","1","0","1","0"],
 ["1","1","0","0","0"],
 ["0","0","0","0","0"]]
*/

var numIslands = function(grid) {
   if (!grid || grid.length === 0) {
        return 0;
    }

    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;

    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
            return;
        }
        grid[r][c] = '0'; // Mark the current land as visited

        // Explore adjacent lands
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                islands++;
                dfs(r, c);
            }
        }
    }

    return islands;
    
};

