/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let mostCandies = Math.max(...candies);
    const returnArray = [];

    candies.forEach((candy) => {
        if (candy + extraCandies >= mostCandies) {
            returnArray.push(true);
        } else {
            returnArray.push(false);
        }
    })

    return returnArray;
};