# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {Integer[]} nums
# @return {TreeNode}
def sorted_array_to_bst(nums)
    
    def helper(nums, l, r)
        return nil if l > r 
        mid = (l + r) / 2
        node = TreeNode.new(nums[mid])
        node.left = helper(nums, l, mid - 1)
        node.right = helper(nums, mid + 1, r)
        return node
    end

    return helper(nums, 0, nums.length - 1)
end