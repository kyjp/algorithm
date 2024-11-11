const input = [
    "5 4",
    "1 2",
    "2 3",
    "3 4",
    "3 5"
]

const [N, M] = input.shift().split(" ").map(i => Number(i))

let edges = []
for(let i = 0; i < M; i++) {
    const [a, b] = input[i].split(' ').map(Number)
    edges.push([a, b])
}

const adjList = Array.from({length: N + 1}, () => [])
console.log(adjList)

edges.forEach(([a, b]) => {
    adjList[a].push(b)
    adjList[b].push(a)
})

console.log(adjList)

for(let i = 1; i <= N; i++) {
    adjList[i].sort((x, y) => x - y)
    console.log(`${i}: {${adjList[i].join(', ')}}`)
}