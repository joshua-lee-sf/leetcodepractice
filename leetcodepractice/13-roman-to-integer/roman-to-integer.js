/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNumerals = {
        i: 1,
        v: 5,
        x: 10,
        l: 50,
        c: 100,
        d: 500,
        m: 1000
    };

    const lowerCaseS = s.toLowerCase();
    let total = 0; // total = 1;
    
    for(let i = 0; i < lowerCaseS.length; i++){
        let curr = lowerCaseS[i]; // curr = i
        let next = lowerCaseS[i + 1]; // next = i
        let currVal = romanNumerals[curr]; // currVal = 1;
        let nextVal = romanNumerals[next]; // nextVal = 1;

        if (currVal >= nextVal || !nextVal ) { // t / f ? t
            total += currVal; 
        } else if (currVal < nextVal) {
            total += (nextVal - currVal);
            i++;
        }
    }

    return total;
};