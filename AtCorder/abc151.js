function Main(input) {
    input = input.split("\n")
    const [H, W] = input.shift().split("\n").map(item => Number(item))
    const maze = []
    for(let i = 0; i < H; i++) {

    }
}

class Node {
    constructor(nodes) {
        this.next = null
        this.data = data
    }
}

class SinglyLinkedList {
    constructor(arr) {
        this.head = arr.length > 0 ? new Node(arr[0]) : new Node(null)

        let currentNode = this.head
        for(let i = 1; i < arr.length; i++) {
            currentNode.next = new Node(arr[i])
            currentNode = currentNode.next
        }
    }

    at(index) {
        let iterator = this.head
        let str = ""
        while(iterator != null) {
            str += iterator.data + " "
            iterator = iterator.next
        }
        console.log(str)
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))