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

class Queue {
    constructor () {
        this.head = null
    }
    put(data) {
        if(data === null) return
        if(this.head === null) {
            this.head = new Node(data)
            return 
        }
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
        return temp
    }
    answer() {
        if(this.head === null) {
            return null
        }
        return this.head.data
    }
 }

 const Q = Number(input.shift())

 const queue = new Queue()

 for(let i = 0; i < Q; i++) {
    const q = input.shift().split(" ")
    switch (q[0]) {
        case "1":
            queue.put(q[1])
            break
        case "2":
            console.log(queue.answer())
            break
        case "3":
            queue.pop()
            break
        default:
            break
    }
 }