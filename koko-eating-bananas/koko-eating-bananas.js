/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let [low, high] = [1, Math.max(...piles)];

    while (low < high){
        const mid = (low + high) >> 1;
        const hourSpent = getHourSpent(mid, piles);

        if (h < hourSpent){ 
            low = mid + 1;
        } else if (hourSpent <= h) {
            high = mid;
        };
    }

    return high;
};

const getHourSpent = (mid, piles, hourSpent = 0) => {
    for (const pile of piles) {
        hourSpent += Math.ceil(pile / mid);
    }

    return hourSpent;
}