class MyQueue
    attr_accessor :enqueue, :dequeue

    def initialize()
        # construct each queue
        @enqueue = [] #LIFO [1]
        @dequeue = [] #LIFO [2]
        # pop, push
    end


=begin
    :type x: Integer
    :rtype: Void
=end
    def push(x)
        enqueue.push(x)
    end


=begin
    :rtype: Integer
=end
    def pop()
        # pop from front,
        # [1,2,3,4,5]
        # [5,4,3,2,1]
        # [5,4,3,2]
        # element = enqueue.pop()
        # dequeue.push(element);
        # pop from dequeue
        # enqueue stack ?
        #e[]
        # el = 1
        # length = 1
        #d[]

        length = enqueue.length;
        if dequeue.length > 0
            element = dequeue.pop()
            return element
        else
            while length > 0 do
                dequeue.push(enqueue.pop())
                length -= 1
            end
            element = dequeue.pop()
            return element
        end
    end


=begin
    :rtype: Integer
=end
    def peek()
        # queue [1,2,3,4,5] returns 1
        # stack: peek looks at the last element
        # LIFO
        # FIFO
        # e[]
        # el = 1
        # d[2, 1]
        #lenght = 0

        length = enqueue.length - 1 # 2

        if dequeue.length > 0
            return dequeue[-1]
        else
            while length >= 0 do
                element = enqueue.pop() # 2
                dequeue.push(element)
                length -= 1
            end
            return dequeue[-1]
        end
    end


=begin
    :rtype: Boolean
=end
    def empty()
        p enqueue.length
        p dequeue.length
        return enqueue.length == 0 && dequeue.length == 0
    end
end

# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue.new()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()