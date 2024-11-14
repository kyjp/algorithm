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

class GraphWithBFS extends Graph {
    constructor() {
        super()
    }

    bfs(start) {
        const visited = new Set()
        const queue = [start]
        visited.add(start)

        while(0 < queue.length) {
            const vertex = queue.shift()
            console.log(vertex)

            const neighbors = this.getEdges(vertex)
            for(let neighbor of neighbors) {
                if(!visited.has(neighbor)) {
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
    }
}