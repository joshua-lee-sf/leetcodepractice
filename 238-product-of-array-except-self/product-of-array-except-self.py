class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prefix = 1
        result = []

        for i in range(len(nums)):
            result.append(prefix)
            prefix *= nums[i]


        suffix = 1
        for i in range(len(nums) - 1, -1, -1):
            result[i] *= suffix
            suffix *= nums[i]

        return result