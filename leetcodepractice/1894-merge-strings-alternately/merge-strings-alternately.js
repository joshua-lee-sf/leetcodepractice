/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let newWord = ""; // newWord = 'apbqrs'

    for (let i = 0; i < Math.max(word1.length, word2.length); i++){ // i = 2, max 4
        if (i < word1.length) newWord += word1[i]; // 2 < 2 ? 
        if (i < word2.length) newWord += word2[i]; // 2 < 4 ?
    }

    return newWord;
};