// 各エッジからエッジにいくまでのノードの重み
const graph = {
    A: {
        B: 5,
        C: 2
    },
    B: {
        A: 5,
        D: 1
    },
    C: {
        A: 2,
        D: 8
    },
    D: {
        B: 1,
        C: 8
    }
}

// 各場所までの最短距離
const distances = {}
// 訪問したかどうか
const visited = {}
// 各場所にたどり着く直前の場所
const previous = {}

// 初期化
for (const node in graph) {
    // 最初はすべて無限大の距離
    distances[node] = Infinity
    //　まだどの場所も訪問していない
    visited[node] = false
    // どの場所から来たか不明
    previous[node] = null
}

// スタート地点の設定
const startNode = "A"
// スタートの距離は0
distances[startNode] = 0

// 最短経路を探す（ダイクストラ法のメインループ）
// 訪問していない箇所がなくなるまでループをする
while(Object.values(visited).includes(false)) {
    // まだ訪問していない場所の中で一番距離が短い場所を探す
    // 次に訪問するノード
    let currentNode = null
    // 最短距離を記録するための変数
    let shortestDistance = Infinity
    // 各場所の最短距離から辺を取り出す
    for(const node in distances) {
        // 訪問していないかつ現在記録している最短距離よりも各場所までの最短距離が短ければ実行
        if(!visited[node] && distances[node] < shortestDistance) {
            // 最短距離の更新
            shortestDistance = distances[node]
            // 次に訪問するノードの更新
            currentNode = node
        }
    }
    // 次のノードがなければ終了
    if(currentNode === null) break
    // グラフの現在のノードから隣接ノードを取り出してループ
    for(const neighbor in graph[currentNode]) {
        // 新しい最短距離を現在記録している最短距離とグラフの現在のノードから隣接ノードまでの距離と足して求める
        const newDistance = distances[currentNode] + graph[currentNode][neighbor]
        // 隣接ノードの最短距離よりも新しい最短距離が短い場合に実行
        if(newDistance < distances[neighbor]) {
            // 隣接ノードの最短距離を新しい最短距離に置き換える
            distances[neighbor] = newDistance
            // どこからきたのかを更新
            previous[neighbor] = currentNode
        }
    }
    // 訪問済みにする
    visited[currentNode] = true
}

// ゴール
const endNode = "D"
let path = []
let currentNode = endNode
while(currentNode != null) {
    path.unshift(currentNode)
    currentNode = previous[currentNode]
}
