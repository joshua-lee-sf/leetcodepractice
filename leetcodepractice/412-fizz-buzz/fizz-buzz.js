/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const fizzBuzzArray = []
    for (let i = 1; i < n + 1; i++){
        if (i % 3 == 0 && i % 5 === 0){
            fizzBuzzArray.push("FizzBuzz")
        } else if (i % 3 === 0){
            fizzBuzzArray.push("Fizz")
        } else if (i % 5 === 0){
            fizzBuzzArray.push("Buzz")
        } else {
            fizzBuzzArray.push(i.toString())
        }
    }

    return fizzBuzzArray
};