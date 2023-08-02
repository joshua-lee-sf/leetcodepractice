/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 // [1,2,3,4,5]

var middleNode = function(head) {
    let slowPointer = head
    let fastPointer = head

    while(fastPointer && fastPointer.next){
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    return slowPointer
};