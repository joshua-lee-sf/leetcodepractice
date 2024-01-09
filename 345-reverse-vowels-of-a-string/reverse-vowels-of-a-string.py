class Solution:
    def reverseVowels(self, s: str) -> str:
        l = 0
        r = len(s) - 1
        vowels = "aeiouAEIOU"
        s_array = list(s)

        while (l < r):
            if s_array[l] in vowels and s_array[r] in vowels:
                s_array[l], s_array[r] = s_array[r], s_array[l]
                l += 1
                r -= 1
            elif s_array[l] in vowels and s_array[r] not in vowels:
                r -= 1
            else:
                l += 1
        
        return "".join(s_array)
                
