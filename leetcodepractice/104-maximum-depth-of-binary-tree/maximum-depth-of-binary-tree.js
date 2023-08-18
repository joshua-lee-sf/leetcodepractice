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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;

    let stack = [[root, 1]];
    let res = 0;

    while (stack.length > 0) {
        [node, depth] = stack.pop();

        if (node) {
            res = Math.max(res, depth);
            stack.push([node.left, depth + 1]);
            stack.push([node.right, depth + 1]);
        } 
    }

    return res;
};