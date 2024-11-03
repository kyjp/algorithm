const input = [
    "3",
    "1 2420",
    "1 1650",
    "2"
]

class PriorityQueue {
    constructor() {
        this.queue = []
    }

    enqueue(data) {
        if(this.queue.length === 0) {
            this.queue.push(data)
            return
        }
        let start = 0
        let end = this.queue.length
        while(start < end) {
            let mid = Math.floor((start + end) / 2)
            if(this.queue[mid] < data) {
                start = mid + 1
                continue
            }
            if(data < this.queue[mid]) {
                end = mid
                continue
            }
        }
        this.queue.splice(start, 0, data)
    }
    peek() {
        if(this.queue.length === 0) return null
        return this.queue[0]
    }

    dequeue() {
        if(this.queue.length === 0) return null
        return this.queue.shift()
    }

    isEmpty() {
        return this.queue.length === 0
    }
}

const priorityQueue = new PriorityQueue()

const Q = Number(input.shift())

for(let i = 0; i < input.length; i++) {
    const temp = input[i].split(" ")
    if(temp[0] === "1") {
        priorityQueue.enqueue(Number(temp[1]))
    }
    if(temp[0] === "2") {
        console.log(priorityQueue.peek())
    }
    if(temp[0] === "3") {
        priorityQueue.dequeue()
    }
}