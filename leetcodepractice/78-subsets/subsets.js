/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const subsets = [];

    let subset = []
    const dfs = (i) => {
        if (i >= nums.length){
            const copy = [...subset];
            subsets.push(copy);
            return;
        }

        // add nums[i]
        subset.push(nums[i])
        dfs(i + 1);

        // do not add nums[i] by popping
        subset.pop();
        dfs(i + 1);
    }

    dfs(0);
    return subsets;
};