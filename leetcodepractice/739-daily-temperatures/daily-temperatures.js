/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 // [73,74,75,71,69,72,76,73]

var dailyTemperatures = function(temperatures) {

    // while in the loop
    // iterate through every temperature
    // 

    let stack = []; // [[75,2]]
    const returnArray = []; //[1, 1, 0, 0, 1]

    for (let i = 0; i < temperatures.length; i++){
        returnArray.push(0)
    }

    for (let i = 0; i < temperatures.length; i++){ // i = 6
        
        while (stack.length > 0 && stack[stack.length - 1][0] < temperatures[i]){ //( 2 > 0 ? && 72 < 76)
            let compareTemp = stack.pop(); //[72, 5]
            returnArray[compareTemp[1]] = i - compareTemp[1]; // 6 - 5 = 1
        }
        stack.push([temperatures[i], i]);
    }

    return returnArray;
};