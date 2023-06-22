
// 35. Search Insert Position

const searchInsert = function(nums, target) {
    /*
    must solve in O(logn)
    iterate through the array? if the target is bigger than the smaller number and smaller than the bigger number, 
    return the index of the bigger number
    */
    let start = 0;
    let end = nums.length - 1;
    let ans = nums.size();
    const mid = Math.floor(nums.length / 2)

    while(start <= end){
        if(nums[mid] === target){
            return mid
        } else if (nums[mid] > target){
            ans = mid
            end = mid = 1
        } else if (nums[mid] < target){
            start = mid + 1
        }
    }

    return ans;
};

// 27. Remove Element

var removeElement = function(nums, val) {
    let count = 0;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== val){
            nums[count++] = nums[i]
        }
    }

    return count
};

// 26. Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    let count = 0

    for(let i = 1; i < nums.length; i++){
        if (nums[count] !== nums[i]){
            count++;
            nums[count] = nums[i]
        }
    }

    return count + 1
};

// 206 Reversed Linked List

var reverseList = function(head) {
    if (!head || !head.next) return head;

    const res = reverseList(head.next);
    console.log(res, "res")
    head.next.next = head;
    head.next = null;
    return res
};

// 707. designed linkedList

var MyLinkedList = function() {
    this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let currentNode = this.head;

    while (index && currentNode.next){
        currentNode = currentNode.next;
        index--;
    }

    return !index && currentNode ? currentNode.val : -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newHead = {
        val,
        next: this.head
    }

    this.head = newHead;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = this.head;
    const crt = {
        val,
        next: null
    }
    
    if (node) {
        while (node.next) {
            node = node.next;
        }
    
        node.next = crt;
    } else {
        this.head = crt;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) {
        this.addAtHead(val);
    } else {
        let node = this.head;
    
        while (index > 1 && node?.next) {
            node = node.next;
            index --;
        }
    
        if (index === 1 && node) {
            const crt = {
                val,
                next: node.next
            };
        
            node.next = crt;
        }
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let node = this.head;
    
    if (index === 0) {
        this.head = node.next;
    } else {
        while (index > 1 && node.next) {
            node = node.next;
            index --;
        }
    
        if (index === 1) {
            node.next = node.next?.next;
        }   
    }
};
