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

class GraphWithDFD extends Graph {
    constructor() {
        super()
    }

    dfs(start) {
        const visited = new Set()
        this._dfsRecursive(start, visited)
    }

    _dfsRecursive(vertex, visited) {
        if(visited.has(vertex)) return
        console.log(vertex)
        visited.add(vertex)

        const neighbors = this.getEdges(vertex)
        for(let neighbor of neighbors) {
            this._dfsRecursive(neighbor, visited)
        }
    }
}