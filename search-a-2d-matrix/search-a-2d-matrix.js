/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    // log (m*n) = log(m) + log(n) 
    // finding the row in log(n) time and then finding target in log(m) time

    const m = matrix[0].length,n = matrix.length;
    if (target < matrix[0][0] || target > matrix[n-1][m-1]) return false;

    let low = 0,high = matrix.length-1;
    let mid;
    while (low <= high) {
        mid = Math.floor((low+high)/2)

        if (target <= matrix[mid][m-1] && target >= matrix[mid][0]) break;
        if (target < matrix[mid][0]) high = mid - 1;
        else if (target > matrix[mid][m-1]) low = mid + 1;
    }


    return binarySearch(target,matrix[mid])
};

function binarySearch(target,nums) {
    let low = 0,high = nums.length-1;

    while (low <= high) {
        let mid = Math.floor((low+high)/2);
        if(target == nums[mid]) return true;

        if(target < nums[mid]) high = mid - 1;
        else low = mid + 1;
    }

    return false
};