const input = [
    "5",
    "1 taro",
    "1 hanako",
    "2",
    "3",
    "2"
]

const Q = Number(input.shift())

class Node {
    constructor (data) {
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor () {
        this.head = null
        this.tail = null
    }
    push(data) {
        if(data === undefined) return null
        if(this.tail === null) {
            this.tail = new Node(data)
            this.head = this.tail
            return
        }
        this.tail.next = new Node(data)
        this.tail = this.tail.next
    }
    front(){
        if(this.head === null) return null
        return this.head.data
    }
    pop() {
        if(this.head === null) return null
        this.head = this.head.next
        if(this.head === null) this.tail = null
        return this.head
    }
    empty() {
        return this.head === null
    }
}

const queue = new Queue()

for(let i = 0; i < Q; i++) {
    let temp = input.shift().split(" ")
    switch (temp[0]) {
        case "1":
            queue.push(temp[1])
            break
        case "2":
            console.log(queue.front())
            break
        case "3":
            queue.pop()
            break
        default:
            break
    }
}