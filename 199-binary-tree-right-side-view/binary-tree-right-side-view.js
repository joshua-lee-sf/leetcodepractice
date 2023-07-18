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
var rightSideView = function(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];

    while (queue.length > 0){
        let rightSide = null;
        let qLength = queue.length;
        
        for (let i = 0; i < qLength; i++){
            let curr = queue.shift();
            if (i === qLength - 1) result.push(curr.val);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
            if (rightSide) result.push(rightSide.val);
        }
    }

    return result;
};