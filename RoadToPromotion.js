const input = [
    "7",
    "1 1 3 2 4 4"
]

const N = Number(input.shift())
const A = input.shift().split(" ").map(i => Number(i))

// 隣接リストを作成
let tree = Array.from({length: N + 1}, () => [])

for(let i = 2; i <= N; i++) {
    tree[A[i - 2]].push(i)
}

const subordinates = Array(N + 1).fill(0)

const dfs = (node) => {
    let count = 0
    for(const child of tree[node]) {
        count += 1 + dfs(child)
    }
    subordinates[node] = count
    return count
}

dfs(1)

console.log(subordinates.slice(1))