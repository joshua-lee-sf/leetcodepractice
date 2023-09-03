/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;

    while (right < prices.length) {
        let buy = prices[left];
        let sell = prices[right];

        if (buy < sell) {
            let profit = sell - buy;
            maxProfit = Math.max(maxProfit, profit)
        } else {
            left = right;
        }
        right++;
    }

    return maxProfit
};