const input = [
    "6 6",
    "1 2",
    "1 3",
    "2 4",
    "3 4",
    "4 5",
    "4 6"
]

class Graph {
    constructor() {
        this.adjList = new Map()
    }
    addVertex(vertex) {
        if(!this.adjList.has(vertex)) {
            this.adjList.set(vertex, [])
        }
    }
    addEdge(vertex1, vertex2) {
        if(this.adjList.has(vertex1) && this.adjList.has(vertex2)) {
            this.adjList.get(vertex1).push(vertex2)
            this.adjList.get(vertex2).push(vertex1)
        }
    }
    getVertices() {
        return Array.from(this.adjList.keys())
    }
    getEdges(vertex) {
        return this.adjList.get(vertex) || []
    }
}

const bfs = (graph, startVertex) => {
    const visited = new Set()
    const queue = []
    const result = []

    queue.push(startVertex)
    visited.add(startVertex)

    while (0 < queue.length) {
        const currentVertex = queue.shift()
        result.push(currentVertex)
        for(const neighbor of graph.getEdges(currentVertex)) {
            if(!visited.has(neighbor)) {
                queue.push(neighbor)
                visited.add(neighbor)
            }
        }
    }
    return visited
}

const graph = new Graph()

const [N, W] = input.shift().split(" ").map(i => Number(i)) 

for(const line of input) { 
    const [A, B] = line.split(" ").map(Number)
    graph.addVertex(A)
    graph.addVertex(B)
    graph.addEdge(A, B)
}

// // BFSを実行
const bfsResult = bfs(graph, 1)
console.log(bfsResult)
if (bfsResult.size === N) {
    console.log("The graph is connected");
} else {
    console.log("The graph is not connected");
}