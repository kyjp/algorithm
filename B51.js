const input = "(())()"

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor() {
        this.head = null
    }
    push(data) {
        if(data === undefined) return
        if(this.head === null) {
            this.head = new Node(data)
            return
        }
        let next = this.head
        this.head = new Node(data)
        this.head.next = next
    }
    top() {
        if(this.head === null) return null
        console.log(this.head.data)
        return this.head.data
    }
    pop() {
        if(this.head === null) return null
        const temp = this.head
        this.head = this.head.next
        return temp.data
    }
    empty() {
        return this.head === null
    }
}

const stack = new Stack()
for(let i = 0; i < input.length; i++) {
    const str = input[i]
    if(str === "(") {
        stack.push(i + 1)
    }
    if(str === ")" && !stack.empty()) {
        console.log(`${stack.pop()}文字目と${i + 1}文字目`)
    }
}