function Main(input) {
    input = input.split("\n");
    const [H, W] = input.shift().split(" ").map(Number);
    
    let maze = [];
    for (let i = 0; i < H; i++) {
        maze.push(input[i].split(""));
    }

    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1] // 上下左右
    ];

    class Queue {
        constructor() {
            this.queue = [];
        }

        enqueue(data) {
            this.queue.push(data);
        }

        dequeue() {
            if (this.queue.length === 0) return null;
            return this.queue.shift();
        }
        
        isEmpty() {
            return this.queue.length === 0;
        }
    }

    function bfs(startRow, startCol) {
        const visited = Array.from({ length: H }, () => Array(W).fill(false));
        const queue = new Queue();
        queue.enqueue([startRow, startCol, 0]); // [row, col, steps]
        visited[startRow][startCol] = true;
        let maxSteps = 0;

        while (!queue.isEmpty()) {
            const [row, col, steps] = queue.dequeue();
            maxSteps = Math.max(maxSteps, steps);

            for (const [dx, dy] of directions) {
                const newRow = row + dx;
                const newCol = col + dy;

                if (
                    newRow >= 0 && newRow < H &&
                    newCol >= 0 && newCol < W &&
                    !visited[newRow][newCol] &&
                    maze[newRow][newCol] === '.'
                ) {
                    queue.enqueue([newRow, newCol, steps + 1]);
                    visited[newRow][newCol] = true;
                }
            }
        }

        return maxSteps;
    }

    let maxDistance = 0;

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (maze[i][j] === '.') {
                maxDistance = Math.max(maxDistance, bfs(i, j));
            }
        }
    }

    console.log(maxDistance);
}

// 標準入力から実行
Main(require("fs").readFileSync("/dev/stdin", "utf8"));