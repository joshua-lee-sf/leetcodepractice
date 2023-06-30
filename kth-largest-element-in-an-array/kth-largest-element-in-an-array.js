/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    k = nums.length - k;

    const quickSelect = (l, r) => {
        let pointer = l;
        let pivot = nums[r];

        for (let i = l; i < r; i++){
            if (nums[i] <= pivot) {
                let temp = nums[pointer];
                nums[pointer] = nums[i];
                nums[i] = temp;
                pointer++; 
            }
        }

        let temp = nums[pointer];
        nums[pointer] = nums[r];
        nums[r] = temp;

        if (pointer > k) return quickSelect(l, pointer - 1);
        else if (pointer < k) return quickSelect(pointer + 1, r);
        else return nums[pointer];
    }

    return quickSelect(0, nums.length - 1)
};
