class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = "aeiouAEIOU"
        vcounter = 0 
        left = 0

        for i in range(k):
            if s[i] in vowels:
                vcounter += 1


        current_counter = vcounter
        for i in range(k, len(s)):
            if s[left] in vowels: 
                current_counter -= 1
            if s[i] in vowels:
                current_counter += 1
            left += 1
            vcounter = max(vcounter, current_counter)

        return vcounter
