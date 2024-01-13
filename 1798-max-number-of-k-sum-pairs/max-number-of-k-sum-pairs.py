class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        nums.sort()
        
        left = 0
        right = len(nums) - 1
        output = 0

        while left < right:
            if nums[left] + nums[right] == k:
                output += 1
                left += 1
                right -= 1
            elif nums[left] + nums[right] < k:
                left += 1
            else:
                right -= 1

        return output
        


