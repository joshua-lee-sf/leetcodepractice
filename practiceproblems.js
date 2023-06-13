
// 35. Search Insert Position

const searchInsert = function(nums, target) {
    /*
    must solve in O(logn)
    iterate through the array? if the target is bigger than the smaller number and smaller than the bigger number, 
    return the index of the bigger number
    */
    let start = 0;
    let end = nums.length - 1;
    let ans = nums.size();
    const mid = Math.floor(nums.length / 2)

    while(start <= end){
        if(nums[mid] === target){
            return mid
        } else if (nums[mid] > target){
            ans = mid
            end = mid = 1
        } else if (nums[mid] < target){
            start = mid + 1
        }
    }

    return ans;
};

hello