/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";

    let length1 = str1.length;
    let length2 = str2.length;

    const gcds = (x,y) => {
        if (!y) return x;
        return gcds(y, x % y)
    }

    let div = gcds(length1,length2);
    return str1.slice(0, div);
};