/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const splitS = s.split(" ");
    const filteredS = []

    for (let i = 0; i < splitS.length; i++){
        if (splitS[i] !== "") filteredS.push(splitS[i])
    }

    const length = filteredS.length;
    return filteredS[length - 1].length;
};