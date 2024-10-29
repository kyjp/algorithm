const input = [
    "4 7",
    "3 13",
    "3 17",
    "5 29",
    "1 10"
]

const [N, W] = input.shift().split(" ").map(i => Number(i))
let dp = [...Array(N + 1)].map(_ => [...Array(W + 1)].fill(0))
let wArr = []
let vArr = []

for(let i = 0; i < N; i++) {
    const [w, v] = input.shift().split(" ").map(i => Number(i))
    wArr.push(w)
    vArr.push(v)
}

for(let i = 1; i <= N; i++) {
    for(let j = 1; j <= W; j++) {
        if(wArr[i - 1] <= j) {
            dp[i][j] = Math.max(vArr[i - 1] + dp[i - 1][j - wArr[i - 1]], dp[i - 1][j])
        } else {
            dp[i][j] = dp[i - 1][j]
        }
    }
}

console.log(dp)
console.log(dp[N][W])