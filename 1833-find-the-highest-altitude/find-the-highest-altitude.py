class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        altitudes = [0]

        for i, x in enumerate(gain):
            altitudes.append(altitudes[i] + x)

        return max(altitudes)