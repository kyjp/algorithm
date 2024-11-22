class PriorityQueue {
    constructor() {
        this.items = [];
    }
    enqueue(node, priority) {
        this.items.push({ node, priority });
        this.items.sort((a, b) => a.priority - b.priority);
    }
    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

const dijkstra = (N, edges, start) => {
    // グラフの構築
    const graph = Array.from({ length: N + 1 }, () => []);
    for (const [A, B, C] of edges) {
        graph[A].push([B, C]);
        graph[B].push([A, C]); // 無向グラフなので両方向を追加
    }

    // 初期化
    const distances = Array(N + 1).fill(Infinity);
    distances[start] = 0;
    const queue = new PriorityQueue();
    queue.enqueue(start, 0);

    // Dijkstra アルゴリズム
    while (!queue.isEmpty()) {
        const { node: currentNode } = queue.dequeue();
        for (const [neighbor, weight] of graph[currentNode]) {
            const newDist = distances[currentNode] + weight;
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                queue.enqueue(neighbor, newDist);
            }
        }
    }

    // 到達できない場合は -1 に置き換える
    return distances.map(dist => (dist === Infinity ? -1 : dist));
};

// 入力の処理
const main = input => {
    const lines = input.trim().split("\n");
    const [N, M] = lines[0].split(" ").map(Number);
    const edges = lines.slice(1).map(line => line.split(" ").map(Number));

    // Dijkstra の実行
    const result = dijkstra(N, edges, 1);

    // 結果の出力（頂点 1 はスキップ）
    console.log(result.slice(1).join("\n"));
};

// サンプル入力
const input = `6 7
1 2 15
1 4 20
2 3 65
2 5 4
3 6 50
4 5 30
5 6 8`;
main(input);