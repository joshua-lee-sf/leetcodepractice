
var MyQueue = function() {
    this.enqueue = []
    this.dequeue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.enqueue.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.dequeue.length > 0){
        return this.dequeue.pop();
    } else {
        while (this.enqueue.length > 0){
            let element = this.enqueue.pop();
            this.dequeue.push(element);
        }
        element = this.dequeue.pop();
        return element; 
    }


};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.dequeue.length > 0) {
        return this.dequeue[this.dequeue.length - 1];
    } else {
        while (this.enqueue.length > 0){
            element = this.enqueue.pop();
            this.dequeue.push(element);
        }
        return this.dequeue[this.dequeue.length - 1];
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.enqueue.length === 0 && this.dequeue.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */