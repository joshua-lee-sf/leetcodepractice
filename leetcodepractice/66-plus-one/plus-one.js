/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let number = BigInt(digits.join(""))
    number += 1n

    digits = number.toString().split("")
    digits.forEach((num) => parseInt(num));
    return digits;
};