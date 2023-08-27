class ListNode
    attr_accessor :val, :next, :prev

    def initialize(val, next_val=nil, prev = nil)
        @val = val
        @next = next_val
        @prev = prev
    end
end

class MyLinkedList
    attr_accessor :left, :right

    def initialize(head=nil, tail=nil)
        @left = ListNode.new(0)
        @right = ListNode.new(0)
        @left.next = @right
        @right.prev = @left
    end


=begin
    :type index: Integer
    :rtype: Integer
=end
    def get(index)
        curr = @left.next
        while curr && index > 0 do
            curr = curr.next
            index -= 1
        end

        if curr && curr != @right && index == 0
            return curr.val
        end

        return -1
    end


=begin
    :type val: Integer
    :rtype: Void
=end
    def add_at_head(val)
        node, next_val, prev = ListNode.new(val), @left.next, @left
        prev.next = node
        next_val.prev = node
        node.next = next_val
        node.prev = prev
    end


=begin
    :type val: Integer
    :rtype: Void
=end
    def add_at_tail(val)
        node, next_val, prev = ListNode.new(val), @right, @right.prev
        prev.next = node
        next_val.prev = node
        node.next = next_val
        node.prev = prev
    end


=begin
    :type index: Integer
    :type val: Integer
    :rtype: Void
=end
    def add_at_index(index, val)
        curr = @left.next
        while curr && index > 0 do
            curr = curr.next
            index -= 1
        end
        if curr && index == 0
            node, next_val, prev = ListNode.new(val), curr, curr.prev
            prev.next = node
            next_val.prev = node
            node.next = next_val
            node.prev = prev
        end
    end


=begin
    :type index: Integer
    :rtype: Void
=end
    def delete_at_index(index)
        curr = @left.next
        while curr && index > 0 do
            curr = curr.next
            index -= 1
        end
        if curr  && curr != @right && index == 0
            next_val, prev = curr.next, curr.prev
            next_val.prev = prev
            prev.next = next_val
        end
    end
end

# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList.new()
# param_1 = obj.get(index)
# obj.add_at_head(val)
# obj.add_at_tail(val)
# obj.add_at_index(index, val)
# obj.delete_at_index(index)