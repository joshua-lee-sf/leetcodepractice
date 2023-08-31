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
# @param {Integer} key
# @return {TreeNode}

def get_min_node(root)
    curr = root

    while curr && curr.left do
        curr = curr.left
    end

    return curr
end

def delete_node(root, key)
    return nil if !root

    if root.val < key
        root.right = delete_node(root.right, key)
    elsif root.val > key
        root.left = delete_node(root.left, key)
    else
        if !root.left
            return root.right
        elsif !root.right
            return root.left
        else
            min_node = get_min_node(root.right)
            root.val = min_node.val
            root.right = delete_node(root.right, min_node.val)
        end
    end

    return root
end
