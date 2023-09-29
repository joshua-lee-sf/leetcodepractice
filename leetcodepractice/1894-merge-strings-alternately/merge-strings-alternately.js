/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    word1 = word1.split("");
    word2 = word2.split("");
    let newWord = ""

    while (word1.length > 0 && word2.length > 0) {
        newWord += word1.shift();
        newWord += word2.shift();
    }

    if (word1.length === 0) {
        newWord += word2.join('');
    } else {
        newWord += word1.join('');
    }

    return newWord;
};