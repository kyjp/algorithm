const input = [
    "3",
    "1 77",
    "3 40",
    "3 80"
]

const Q = Number(input.shift())

class PriorityQueue {
    constructor(){
        this.queue = []
    }
    enqueue(data) {
        if(data === null) return null
        if(this.queue.length === 0) {
            this.queue.push(data)
            return
        }
        let start = 0
        let end = 0
        while(end < start) {
            let mid = Math.floor((start + end) / 2)
            if(this.queue[mid] < this.queue[start]) {
                start = mid + 1
                continue
            }
            if(this.queue[end] < this.queue[mid]) {
                end = mid
                continue
            }
        }
        this.queue.splice(start, 0, data)
    }
    dequeue(data) {
        if(this.queue.length === 0) {
            return null
        }
        this.queue = this.queue.filter(item => item !== data)
        return data
    }
    isMoreMinimum(data) {
        let tempArr = this.queue.filter(item => Number(data) <= Number(item))
        if(tempArr.length === 0) return -1
        return tempArr.reduce((a, b) => Math.min(a < b ? a : b))
    }
}

const queue = new PriorityQueue()

for(let i = 0; i < input.length; i++) {
    const q = input[i].split(" ")
    if(q[0] === "1") {
        queue.enqueue(q[1])
        continue
    }
    if(q[0] === "2") {
        queue.dequeue(q[1])
        continue
    }
    if(q[0] === "3") {
        console.log(queue.isMoreMinimum(q[1]))
    }
}
