/*
direct access
sequential access
*/

class LinkedList {
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }
    // app
    append(value) {
        // if list is empty
        this.length++;
        if (!this.tail) {
            this.head = this.tail = new Node(value);
        } else {
            let oldTail = this.tail;
            this.tail = new Node(value);
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }
    }
    prepend(value) {
        // if list is empty
        this.length++;
        if (!this.head) {
            this.head = this.tail = new Node(value);
        } else {
            let oldHead = this.head;
            this.head = new Node(value);
            oldHead.prev = this.head;
            this.head.next = oldHead;
        }
    }
    deleteHead() {
        // if list is empty        
        if (!this.head) {
            return null;
        } else {
            let removeHead = this.head;
            // if 1 node left
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            this.length--;
            return removeHead.value;
        }
    }
    deleteTail() {
        // if list is empty
        if (!this.tail) {
            return null;
        } else {
            let removedTail = this.tail;
            // if 1 node left
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            this.length--;
            return removedTail.value;
        }
    }
    reverse() {
        0
    }
    search(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}

class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev || null;
        this.next = next || null;
    }
}

const ll = new LinkedList();

ll.append(1)
ll.append(2)
ll.append(3)

ll.prepend(0)
ll.prepend(-1)

// console.log(ll.search(1))
// console.log(ll.search(3))
// console.log(ll.search(999))

ll.deleteHead()
ll.deleteTail()

console.log(ll);


