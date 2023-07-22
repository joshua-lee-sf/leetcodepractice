/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    backTrack(0, [], 0, candidates, target, result);
    return result;
};

const backTrack = (i, tempArray, total, candidates, target, result) => {
    if (total === target){
        result.push([...tempArray]);
        return;
    }

    if (i >= candidates.length || total > target){
        return;
    }

    tempArray.push(candidates[i]);
    backTrack(i, tempArray, total + candidates[i], candidates, target, result);
    tempArray.pop();
    backTrack(i + 1, tempArray, total, candidates, target, result)
}