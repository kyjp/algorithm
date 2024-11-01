function Main(input) {
    input = input.split("\n")
    const [H, W] = input.shift().split(" ").map(item => Number(item))
    let maze = []
    for(let i = 0; i < H; i++) {
      maze.push(Array.from(input.shift()).map(i => i))
    }
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    // BFS（幅優先探索）関数
    function bfs(start) {
        const [sx, sy] = start; // スタート位置を取得
        // 各マスまでの距離を無限大で初期化
        const dist = Array.from({ length: H }, () => Array(W).fill(Infinity));
        const queue = [[sx, sy]]; // 探索キューにスタート位置を追加
        dist[sx][sy] = 0; // スタート位置の距離は0

        // キューが空になるまで探索を続ける
        while (queue.length > 0) {
            const [x, y] = queue.shift(); // キューからマスを取り出す
            // 上下左右に移動
            for (const [dx, dy] of directions) {
                const nx = x + dx; // 新しいx座標
                const ny = y + dy; // 新しいy座標
                // 新しい位置が迷路内であり、壁でない場合
                if (nx >= 0 && ny >= 0 && nx < H && ny < W && maze[nx][ny] === '.' && dist[nx][ny] === Infinity) {
                    dist[nx][ny] = dist[x][y] + 1; // 距離を更新
                    queue.push([nx, ny]); // 新しい位置をキューに追加
                }
            }
        }
        return dist; // 各マスまでの距離の配列を返す
    }

    // 迷路内の「.」のマスを収集
    const positions = [];
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (maze[i][j] === '.') {
                positions.push([i, j]); // 道のマスを追加
            }
        }
    }

    let maxDistance = 0; // 最長の最短距離を記録する変数
    
    // 各道のマスからBFSを実行
    for (const pos of positions) {
        const distances = bfs(pos); // 現在のマスからの距離を計算
        // 他の道のマスを走査して最大距離を探す
        for (const otherPos of positions) {
            const [tx, ty] = otherPos; // 他のマスの位置を取得
            if (distances[tx][ty] !== Infinity) { // 到達可能なマスである場合
                maxDistance = Math.max(maxDistance, distances[tx][ty]); // 最大距離を更新
            }
        }
    }

    console.log(maxDistance)
    return maxDistance
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))