
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

var removeElement = function(nums, val) {
    let count = 0;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== val){
            nums[count++] = nums[i]
        }
    }

    return count
};

var removeDuplicates = function(nums) {
    let count = 0

    for(let i = 1; i < nums.length; i++){
        if (nums[count] !== nums[i]){
            count++;
            nums[count] = nums[i]
        }
    }

    return count + 1
};

linkedList = {
    "dog": {
        value: "dog",
        next: "cat"
    },
    "cat":{
        value: "cat",
        next: "bird"
    },
    "bird":{
        value: "bird",
        next: null
    }
}

var reverseList = function(head) {
    if (!head || !head.next) return head;

    const res = reverseList(head.next);
    console.log(res, "res")
    head.next.next = head;
    head.next = null;
    return res
};

console.log(reverseList(linkedList));