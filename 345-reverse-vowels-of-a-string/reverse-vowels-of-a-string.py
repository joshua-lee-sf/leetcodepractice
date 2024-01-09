class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = "aeiouAEIOU"
        ordered_vowels = []
        s_split = []

        for i in range(len(s)):
            s_split.append(s[i])
            if s[i] in vowels:
                ordered_vowels.append(s[i])


        current_index = len(ordered_vowels) - 1

        for i in range(len(s)):
            if s[i] in vowels:
                s_split[i] = ordered_vowels[current_index]
                current_index -= 1
        
        return "".join(s_split)
        