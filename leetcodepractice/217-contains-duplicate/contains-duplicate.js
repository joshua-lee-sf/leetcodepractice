/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsHash = {}

    for (let i = 0; i < nums.length; i++){
        let element = nums[i]

        if (numsHash[element]){
            numsHash[element] += 1;
        } else {
            numsHash[element] = 1;
        }
    }

    return Object.values(numsHash).some((num) => num >= 2);
};