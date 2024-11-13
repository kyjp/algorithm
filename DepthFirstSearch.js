const input = [
    '6 6',
    '1 2',
    '1 3',
    '2 4',
    '3 4',
    '4 5',
    '4 6'
]

const dfs = (v, adj, visited) => {
    visited[v] = true
    for(let neighbor of adj[v]) {
        if(!visited[neighbor]) {
            dfs(neighbor, adj, visited)
        }
    }
}

const [N, M] = input.shift().split(' ').map(i => Number(i))
const adj = Array.from({length: N + 1}, () => [])
for(let i = 0; i < M; i++) {
    const [A, B] = input.shift().split(' ').map(i => Number(i))
    adj[A].push(B)
    adj[B].push(A)
}

const visited = new Array(N + 1).fill(false)
dfs(1, adj, visited)

if(visited.slice(1).every(v => v)) {
    console.log("The graph is connected");
} else {
    console.log("The graph is not connected");
}