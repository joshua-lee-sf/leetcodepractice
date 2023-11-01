/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums, i=0, memo = initMemo(nums)) {
    const isBaseCase = nums.length <= i;
    if (isBaseCase) return 0;

    const hasSeen = 0 <= memo[i];
    if (hasSeen) return memo[i];

    const [next, nextNext] = [(i + 1), (i + 2)];
    const right = nums[i];
    const mid = rob(nums, next, memo);
    const left = rob(nums, nextNext, memo);
    const house = left + right;

    memo[i] = Math.max(mid, house);

    return memo[i];
};

const initMemo = (nums) => Array(nums.length + 1).fill(-1)