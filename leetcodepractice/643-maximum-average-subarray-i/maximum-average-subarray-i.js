/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let average = -Infinity;
    let windowSum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd];

        if ((windowEnd - windowStart) + 1 === k) {
            average = Math.max(average, (windowSum / k));
            windowSum -= nums[windowStart];
            windowStart++;
        }
    }

    return average
};
