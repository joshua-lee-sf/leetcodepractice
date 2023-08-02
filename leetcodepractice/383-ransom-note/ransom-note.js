/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const ransomHash = {};
    const magazineHash = {};

    magazine.split("").forEach((char) => {
        if (magazineHash[char]){
            magazineHash[char] += 1;
        } else {
            magazineHash[char] = 1;
        }
    })

    ransomNote.split("").forEach((char) => {
        if (ransomHash[char]){
            ransomHash[char] += 1;
        } else {
            ransomHash[char] = 1;
        }
    })

    console.log(ransomHash);
    console.log(magazineHash);

    for (let i = 0; i < ransomNote.length; i++){
        let char = ransomNote[i]
        if (!magazineHash[char] || magazineHash[char] < ransomHash[char]){
            return false;
        } 
    }

    return true;
};