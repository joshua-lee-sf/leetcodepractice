class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        str1_length, str2_length = len(str1), len(str2)

        def isDivisor(l):
            if str1_length % l or str2_length % l:
                return False
            f1, f2 = str1_length // l, str2_length // l
            return str1[:l] * f1 == str1 and str1[:l] * f2 == str2

        for l in range(min(str1_length, str2_length), 0, -1):
            if isDivisor(l):
                return str1[:l]
        return ""
