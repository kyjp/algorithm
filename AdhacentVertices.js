const input = [
    '5 4',
    '1 2',
    '2 3',
    '3 4',
    '3 5',
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
    getVertex(vertex) {
        return Array.from(this.adjList.keys())
    }
    getEdges(vertex) {
        return this.adjList.get(vertex) || []
    }
}

const [N, M] = input.shift().split(' ').map(i => Number(i))

const graph = new Graph()

for(let i = 0; i < M; i++) {
    const temp = input[i].split(' ').map(i => Number(i))
 
    if(graph.adjList.has(temp[0]) === false) {
        graph.addVertex(temp[0])
    }
    
    if(graph.adjList.has(temp[1]) === false) {
        graph.addVertex(temp[1])
    }
    graph.addEdge(temp[0], temp[1])
}

console.log(graph.adjList)