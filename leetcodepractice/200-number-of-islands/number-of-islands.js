/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid, connectedComponents = 0) {

    const rows = grid.length;
    const columns = grid[0].length;

    for (let row = 0; row < rows; row++){
        for (let column = 0; column < columns; column++){
            const isLand = grid[row][column] === "1"
            if (isLand) connectedComponents++;

            dfs(grid, row, rows, column, columns);
        }
    } 

    return connectedComponents;
};

const dfs = (grid, row, rows, column, columns) => {
    const isBaseCase = grid[row][column] === "0";
    if (isBaseCase) return;

    grid[row][column] = "0";

    for (const [_row, _column] of getNeighbors(row, rows, column, columns)){
        dfs(grid, _row, rows, _column, columns);
    }
}

const getNeighbors = (row, rows, column, columns) => [[ 0,1 ], [ 0, -1 ], [ 1, 0 ], [ -1, 0 ] ]
    .map(([_row, _column]) => [ (row + _row), (column + _column) ])
    .filter(([_row, _column]) => (0 <= _row) && (_row < rows) && (0 <= _column) && (_column < columns))
