/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    	let units = 0;
        let numBoxes = 0;

	    let sortedNums = boxTypes.sort(function (a, b) {
	        return b[1] - a[1] 
        }) // sortedArrays = [[5,10], [3,9], [4,7], [2,5]]

        for (let box of sortedNums) {
            let potentialBoxes = box[0]  + numBoxes
            if ( potentialBoxes < truckSize) {
                units += box[0] * box[1];
                numBoxes += box[0];
            } else {
                let remainderBoxes  = truckSize - numBoxes ;
                units += remainderBoxes  *  box[1]; 
                numBoxes += remainderBoxes
            }
        }
        return units;
};