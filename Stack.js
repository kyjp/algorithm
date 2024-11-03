const input = [
    "5",
    "1 futuremap",
    "1 howtospeak",
    "2",
    "3",
    "2"
]

class Node {
    constructor (data) {
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor () {
        this.head = null
    }
    push(data) {
        if(data === null) return
        const next = this.head
        this.head = new Node(data)
        this.head.next = next
        return
    }
    pop() {
        if(this.head === null) {
            return null
        }
        let temp = this.head
        this.head = this.head.next
        return temp.data
    }
    top() {
        if(this.head === null) {
            return null
        }
        return this.head.data
    }
 }

 const Q = Number(input.shift())

 const stack = new Stack()

 for(let i = 0; i < Q; i++) {
    const q = input.shift().split(" ")
    switch (q[0]) {
        case "1":
            stack.push(q[1])
            break
        case "2":
            console.log(stack.top())
            break
        case "3":
            stack.pop()
            break
        default:
            break
    }
 }