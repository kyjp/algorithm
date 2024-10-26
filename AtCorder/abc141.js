function Main(input) {
    input = input.split("\n")
    const [N, M] = input.shift().split(" ").map(i => Number(i))
    let A = input.shift().split(" ").map(i => Number(i))
    A.sort((a, b) => b - a)
    const queue = new PriorityQueue(A)
    for(let i = 0; i < M; i++) {
        let temp = queue.pop()
        let min = Math.floor(temp / 2 ** 1)
        queue.insert(min)
    }
    let total = queue.maxHeap.reduce((a, b) => a + b)
    console.log(total)
    return total
}

class HeapLibrary {
    static buildMaxHeap(arr) {
        let mid = HeapLibrary.parent(arr.length - 1)
        for(let i = mid; 0 <= i; i--) {
            HeapLibrary.maxHeapify(arr, arr.length - 1)
        }
    }
    static maxHeapify(arr, heapEnd, i) {
        let l = HeapLibrary.left(i)
        let r = HeapLibrary.right(i)
        let biggest = i
        if(l <= heapEnd && arr[l] > arr[biggest]) biggest = l
        if(r <= heapEnd && arr[r] > arr[biggest]) biggest = r
        if(i !== biggest) {
            let temp = arr[i]
            arr[i] = arr[biggest]
            arr[biggest] = temp
            return HeapLibrary.maxHeapify(arr, heapEnd, biggest)
        }
    }
    static left(i) {
        return i * 2 + 1
    }
    static right(i) {
        return i * 2 + 2
    }
    static parent(i) {
        return Math.floor((i - 1) / 2)
    }
}

class PriorityQueue {
    constructor(arr) {
        this.maxHeap = [...arr]
    }
    top() {
        HeapLibrary.buildMaxHeap(this.maxHeap)
        return this.maxHeap.shift()
    }
    pop() {
        let popped = this.maxHeap[0]
        this.maxHeap[0] = this.maxHeap[this.maxHeap.length - 1]
        this.maxHeap.pop()
        HeapLibrary.maxHeapify(this.maxHeap, this.maxHeap.length - 1, 0)
        return popped
    }
    insert(x) {
        this.maxHeap.push(x)
        let i = this.maxHeap.length - 1
        let parent = HeapLibrary.parent(i)
        while(parent >= 0 && this.maxHeap[parent] < x) {
            const temp = this.maxHeap[i]
            this.maxHeap[i] = this.maxHeap[parent]
            this.maxHeap[parent] = temp
            i = parent
            parent = HeapLibrary.parent(i)
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))