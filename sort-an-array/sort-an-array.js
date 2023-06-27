/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums, func) {
    if (nums.length <= 1) return nums;

    if (!func){
        func = (left, right) => {
            return left < right ? -1 : left > right ? 1 : 0;
        }
    }

    const midpoint = Math.floor(nums.length / 2);
    const left = sortArray(nums.slice(0, midpoint), func);
    const right = sortArray(nums.slice(midpoint), func);
    return merger(left, right, func);
};

const merger = (left, right, func) => {
    let merged = []
    
    while (left.length && right.length){
        switch(func(left[0], right[0])){
            case -1:
                merged.push(left.shift());
                break;
            case 0:
                merged.push(left.shift());
                break;
            case 1:
                merged.push(right.shift());
                break;
        }
    }

    merged = merged.concat(left, right)
    return merged;
}