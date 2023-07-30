/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const reduced = []
    for(let i = 0; i < accounts.length; i++){
        reduced.push(accounts[i].reduce((acc, ele) => acc + ele))
    }

    return reduced.sort((a,b) => a - b)[reduced.length - 1]
};