class PriorityQueue {
    constructor() {
        this.item = []
    }
    enqueue(node, priority) {
        this.items.push({node, priority})
        this.items.sort((a, b) => a.priority - b.priority)
    }
    dequeue() {
        return this.items.shift()
    }
    isEmpty() {
        return this.items.length === 0
    }
}

const dijkstra = (graph, start) => {
    const distances = {}
    const visited = new Set()
    const queue = new PriorityQueue()

    for(const node in graph) {
        distances[node] = Infinity
    }
    distances[start] = 0
    queue.enqueue(start, 0)
    while(!queue.isEmpty()) {
        const {node: currentNode} = queue.dequeue()
        if(visited.has(currentNode)) continue
        visited.add(currentNode)
        for(const [neighbor, weight] of Object.entries(graph[currentNode])) {
            const newDist = distances[currentNode] + weight
            if(newDist < distances[neighbor]) {
                distances[neighbor] = newDist
                queue.enqueue(neighbor, newDist)
            }
        }
    }
    return distances
}