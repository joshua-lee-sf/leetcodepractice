/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => a - b)
    
    let result = 0;
    let n = citations.length;
    
    for(let i = 0; i < n; i++){
        result = Math.max(result, Math.min(citations[i], n-i))
    }
    
    return result;
};