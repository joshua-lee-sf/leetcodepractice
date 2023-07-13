/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root, inOrder = []) {
    if(!root) return []

    inorderTraversal(root.left, inOrder);
    inOrder.push(root.val);
    inorderTraversal(root.right, inOrder);
    return inOrder;
};