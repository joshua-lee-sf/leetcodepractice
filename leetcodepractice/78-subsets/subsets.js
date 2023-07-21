/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const subsets = [];

    let subset = []
    const dfs = (i) => {
        if (i >= nums.length) {
            let copy = [...subset]
            subsets.push(copy)
            return;
        }
        subset.push(nums[i])
        dfs(i + 1);
        subset.pop();
        dfs(i + 1);
    }

    dfs(0);
    return subsets;
};