function Main(input) {
    input = input.split("\n")
    const [N, W] = input.shift().split(' ').map(i => Number(i))
    let dp = [...Array(N + 1)].map(i => [...Array(W + 1).fill(0)])
    let wArr = []
    let vArr = []
    for(let i = 0; i < N; i++) {
        let [w, v] = input.shift().split(' ').map(i => Number(i))
        wArr.push(w)
        vArr.push(v)
    }
    wArr.unshift(0)
    vArr.unshift(0)
    for(let i = 1; i <= N; i++) {
      for(let j = 0; j <= W; j++) {
        if(wArr[i] <= j) {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - wArr[i]] + vArr[i])
        }else{
          dp[i][j] = dp[i - 1][j]
        }
      }
    }
    console.log(dp[N][W])
    return dp[N][W]
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))