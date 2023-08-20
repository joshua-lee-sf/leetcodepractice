/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const numsCount = {};
    let numsCountArray = []

    nums.forEach((num) => {
        if (!numsCount[num]){
            numsCount[num] = 1
        } else {
            numsCount[num] += 1;
        }
    })

    Object.keys(numsCount).forEach((element) => {
        numsCountArray.push([element, numsCount[element]])
    })

    numsCountArray.sort((a,b) => a[1] - b[1]);

    const length = numsCountArray.length;
    return numsCountArray[length - 1][0];

};