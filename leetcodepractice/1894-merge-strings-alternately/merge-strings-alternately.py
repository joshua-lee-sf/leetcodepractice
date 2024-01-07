class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        new_word = ""
        word1_length = len(word1)
        word2_length = len(word2)

        if word1_length == word2_length:
            for i in range(max(len(word1), len(word2))):
                new_word += word1[i]
                new_word += word2[i]
        else:
            min_index = min(word1_length, word2_length)
            for i in range(min_index):
                new_word += word1[i]
                new_word += word2[i]
            if word1_length < word2_length:
                new_word += word2[word1_length:word2_length]
            else:
                new_word += word1[word2_length:word1_length]
        return new_word
