/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) return -1;

    const midpoint = Math.floor(nums.length / 2)

    if(nums[midpoint] === target){
        return midpoint
    } else if (nums[midpoint] > target){
        return search(nums.slice(0, midpoint), target)
    } else {
        const result = search(nums.slice(midpoint + 1), target)
        return result === -1 ? -1 : result + midpoint + 1
    }
};