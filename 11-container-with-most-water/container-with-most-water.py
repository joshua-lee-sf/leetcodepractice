class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_water = 0
        left = 0
        right = len(height) - 1

        while left < right:
            length = min(height[left], height[right])
            width = right - left
            area = length * width

            if height[left] <= height[right]:
                left += 1
            else:
                right -= 1

            if area > max_water:
                max_water = area
        
        return max_water