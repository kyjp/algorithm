function Main(input) {
    input = input.split("\n")
    let [H, W, X, Y] = input.shift().split(" ").map(i => Number(i))
    let grid = []
    for(let i = 0; i < input.length; i++) {
        let S = Array.from(input[i])
        grid = [...grid, S]
    } 

    X -= 1;
    Y -= 1;
    
    let ans = 0;
    
    // 上
    for (let i = 1; i <= X; i++) {
        if (X - i >= 0) {
            if (grid[X - i][Y] === "#") {
                break;
            } else {
                ans++;
            }
        }
    }
    
    // 下
    for (let i = 1; i < H - X; i++) {
        if (X + i < H) {
            if (grid[X + i][Y] === "#") {
                break;
            } else {
                ans++;
            }
        }
    }
    
    // 左
    for (let i = 1; i <= Y; i++) {
        if (Y - i >= 0) {
            if (grid[X][Y - i] === "#") {
                break;
            } else {
                ans++;
            }
        }
    }
    
    // 右
    for (let i = 1; i < W - Y; i++) {
        if (Y + i < W) {
            if (grid[X][Y + i] === "#") {
                break;
            } else {
                ans++;
            }
        }
    }
    
    ans += 1;

    console.log(ans)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))