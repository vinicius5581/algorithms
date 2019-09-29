class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value),
        this.count = 1
    }

    size = () => this.count

    insert = value => {
        this.count++
        let newNode = new Node(value)
        const searchTree = node => {
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode
                } else {
                    searchTree(node.left)
                }
            }
            if (value > node.value) {
                if (!node.right) {
                    node.right = newNode
                } else {
                    searchTree(node.right)
                }
            }
        }
        searchTree(this.root);
    }

    min() {
        let currentNode = this.root
        // continue traversing left until no more children
        while (currentNode.left) {
            currentNode = currentNode.left
        }
        return currentNode.value
    }

    max() {
        let currentNode = this.root
        // continue traversing left until no more children
        while (currentNode.right) {
            currentNode = currentNode.right
        }
        return currentNode.value
    }

    contains(value) {
        let currentNode =  this.root
        while(currentNode) {            
            if (value === currentNode.value){
                return true
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }
        return false;
    }

    // depth first search - branch by branch
  
    // in-order
    // left, root, right
    // 2, 3, 12, 15, 28, 36, 39
    dfsInOrder() {}

    // pre-order
    // root, left, right
    // 15, 3, 2, 12, 36, 28, 39
    dfsPreOrder() {}

    // post-order
    // left, right, root
    // 2, 12, 3, 28, 39, 36, 15
    dfsPostOrder() {}

    // breadth first search - level by level
  
    // use a queue!
    // 15, 3, 36, 2, 12, 28, 39
    bfs() {}
}

const bst = new BST(15)
bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)
bst.size()
console.log('bst.min: ', bst.min())
console.log('bst.max: ', bst.max())
console.log('bst.contains: ', bst.contains(2))
console.log('bst.contains: ', bst.contains(9))
  
// DFS!!!
// in-order: 2, 3, 12, 15, 28, 36, 39
bst.dfsInOrder()

// pre-order: 15, 3, 2, 12, 36, 28, 39
bst.dfsPreOrder()

// post-order: 2, 12, 3, 28, 39, 36, 15
bst.dfsPostOrder()

// BFS!!!
// 15, 3, 36, 2, 12, 28, 39
console.log(bst.bfs())

console.log(bst)