/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const sArray = s.split(' ');
    const newArray = [];

    for (let i = s.length - 1; i >= 0; i--){
        if (sArray[i]) newArray.push(sArray[i]);
    }

    return newArray.join(' ');
};