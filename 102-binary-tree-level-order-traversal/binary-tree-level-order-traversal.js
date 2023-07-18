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
    let queue = [root];
    let tree = []

    while(queue.length > 0){
        let subTree = [];
        let length = queue.length;
        for (let i = 0; i < length; i++){
            let curr = queue.shift();
            if (curr){
                subTree.push(curr.val);
                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);
            }
        }
        if (subTree.length > 0) tree.push(subTree);
    }
    return tree
};