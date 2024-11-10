class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(data) {
        const newNode = new Node(data)
        if(this.root === null) {
            this.root = newNode
        } else {
            this._insertNode(this.root, newNode)
        }
    }
    _insertNode(node, newNode) {
        if(newNode.data < node.data) {
            if(node.prev === null) {
                node.prev = newNode
            } else {
                this._insertNode(node.prev, newNode)
            }
        } else {
            if(node.next === null) {
                node.next = newNode
            } else {
                this._insertNode(node.next, newNode)
            }
        }
    }
    search(data) {
        return this._searchNode(this.root, data)
    }
    _searchNode(node, data) {
        if(node === null) {
            return false
        }
        if(data < node.data) {
            return this._searchNode(node.prev, data)
        }else if(node.data < data) {
            return this._searchNode(node.next, data)
        }else {
            return true
        }
    }
    inOrder() {
        const result = []
        this._isOrderTraversal(this.root, result)
        return result
    }
    _isOrderTraversal(node, result) {
        if(node !== null) {
            this._isOrderTraversal(node.prev, result)
            result.push(node.data)
            this._isOrderTraversal(node.next, result)
        }
    }
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(2)
bst.insert(7)
bst.insert(12)
bst.insert(18)

console.log(bst.inOrder())
console.log(bst.search(7))
console.log(bst.search(100))