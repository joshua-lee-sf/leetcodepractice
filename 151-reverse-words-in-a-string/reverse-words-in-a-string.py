class Solution:
    def reverseWords(self, s: str) -> str:
        reverse_order = []
        split = s.split(' ')
        
        for i in range(len(split) - 1, -1 ,-1):
            if split[i] != "":
                reverse_order.append(split[i])
        
        return " ".join(reverse_order)