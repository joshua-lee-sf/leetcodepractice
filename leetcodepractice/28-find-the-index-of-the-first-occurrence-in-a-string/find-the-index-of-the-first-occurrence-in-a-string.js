/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 // haystack = mississippi
 // needle = issip
var strStr = function(haystack, needle) {
    let k = 0;

    for (let i = 0; i < haystack.length; i++){
        if (haystack[i]  === needle[k]){ // p === p / k = 5
            k++
            if (k === needle.length){
                return i - (k - 1) // 8 - (5 - 1)
            }
        } else {
            i = i - k
            k = 0
        }
    }

    return -1
};

hello