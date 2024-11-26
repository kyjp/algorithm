function calculateRanks(N, T, relationships) {
    // 隣接リスト
    const tree = Array.from({length: N + 1}, () => [])
    console.log(tree)
    relationships.forEach(([A, B]) => {
        tree[A].push(B)
        tree[B].push(A)
    })
    console.log(tree)
    const ranks = Array(N+1).fill(0)
    console.log(ranks)
    function dfs(node, parent) {
        let maxSubRank = 0
        for(const child of tree[node]) {
            if(child !== parent) {
                maxSubRank = Math.max(maxSubRank, dfs(child, node))
            }
        }
        ranks[node] = maxSubRank
        return maxSubRank + 1
    }
    dfs(T, -1)
    return ranks.slice(1)
}

const N = 5
const T = 1
const relationships = [
    [1, 2],
    [1, 3],
    [3, 4],
    [3, 5]
]

const result = calculateRanks(N, T, relationships)
console.log(result)