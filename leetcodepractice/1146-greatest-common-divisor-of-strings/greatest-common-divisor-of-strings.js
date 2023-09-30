/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const length1 = str1.length;
    const length2 = str2.length;

    const isDivisor = (l) => {
        if (length1 % l || length2 % l) {
            return false;
        }

        let [f1, f2] = [Math.floor(length1 / l), Math.floor(length2 / l)];
        
        return (
            str1.slice(0,l).repeat(f1) == str1 && 
            str1.slice(0,l).repeat(f2) == str2
        );
    };

    for (let l = Math.min(length1, length2); l > 0; l--){
        if (isDivisor(l)) {
            return str1.slice(0,l);
        }
    };

    return "";
};