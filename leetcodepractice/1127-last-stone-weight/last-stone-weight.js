/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones = stones.sort((a,b) => b - a);

    while (stones.length > 1){
        first = stones.shift();
        second = stones.shift();
        let newStone = first - second;
        stones.push(newStone);
        stones = stones.sort((a,b) => b - a);
    }

    return stones[0];
};