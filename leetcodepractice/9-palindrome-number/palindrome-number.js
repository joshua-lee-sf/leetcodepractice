/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const xString = x.toString();
    const stringLength = xString.length;
    let reversedString = ""

    for (let i = stringLength - 1 ; i >= 0; i--){
        reversedString += xString[i];
    }

    return reversedString === xString;
};