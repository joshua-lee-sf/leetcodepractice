# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head == None:
            return head
        
        odd_node = head
        even_node = head.next
        even_head = even_node

        while even_node != None and even_node.next != None:
            odd_node.next = even_node.next
            even_node.next = odd_node.next.next
            odd_node = odd_node.next
            even_node = even_node.next
        
        odd_node.next = even_head

        return head
