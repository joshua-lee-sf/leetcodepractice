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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const queue = [root];
    const tree = [];

    while (queue[0]){
        let subTree = [];
        let length = queue.length;
        for (let i = 0; i < length; i++){
            let curr = queue.shift();
            subTree.push(curr.val);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        tree.push(subTree);
    }

    return tree;
};