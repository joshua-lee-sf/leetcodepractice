/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // const singleNums = [];

    // nums.forEach(num => {
    //     if (!singleNums.includes(num)) singleNums.push(num);
    // })

    const sorted = nums.sort( function(a,b) {
        return a-b
    });
    const length = sorted.length;
    return sorted[length - k];
};