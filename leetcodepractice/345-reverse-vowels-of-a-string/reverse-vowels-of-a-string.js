/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = 'aeiou';
    const splitInput = s.split('');
    let originalOrder = []

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) originalOrder.push(s[i]);
    }

    originalOrder = originalOrder.reverse();
    let oI = 0;

    while (oI < originalOrder.length) {
        for (let i = 0; i < s.length; i++) {
            if (vowels.includes(s[i].toLowerCase())) {
                splitInput[i] = originalOrder[oI];
                oI++;
            }
        }
    }

    return splitInput.join('');
};