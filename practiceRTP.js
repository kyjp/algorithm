const input = [
    "7",
    "1 1 3 2 4 4"
]

// ノードの数
const N = Number(input.shift())
// 入力から親ノードの配列を取得し、数値の配列に変換
const A = input.shift().split(" ").map(i => Number(i))
// 隣接リストを作成（各ノードの子ノードを保持する）
let tree = Array.from({length: N + 1}, () => [])

for(let i = 2; i <= N; i++) {
    tree[A[i - 2]].push(i)
}


let subordinates = Array(N + 1).fill(0)


const dfs = (node) => {
    // 現在のノードに属する数をカウントする変数を初期化
    let count = 0
    // 現在のノードの子ノードを順に処理
    for(const child of tree[node]) {
        // 直接の子ノードの数を加算
        count += 1 + dfs(child)
    }
    // 計算結果をsubordinates配列に格納
    subordinates[node] = count
    return count
}

// ルートノードが1の場合
dfs(1)

console.log(subordinates.slice(1))