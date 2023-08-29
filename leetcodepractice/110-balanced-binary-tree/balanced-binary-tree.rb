# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Boolean}
def is_balanced(root)

    def dfs(root)
        return [true, 0] if !root

        left, right = dfs(root.left), dfs(root.right)
        balanced = left[0] && right[0] && (left[1] - right[1]).abs <= 1

        return [balanced, [left[1], right[1]].max + 1]
    end

    return dfs(root)[0]
end