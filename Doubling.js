const input = [
    "7 4",
    "2 4 1 7 6 5 3",
    "1 1",
    "1 5",
    "2 13",
    "5 999999999"
]

const [L, Q] = input.shift().map(i => Number(i))
const A = [0, ...input.shift().map(i => Number(i))]

const MAX_DAYS = 30
let dp = Array.from({length: N + 1}, () => Array(MAX_DAYS).fill(0))

for(let i = 1; i <= N; i++) {
    dp[i][0] = A[i]
}

for(let k = 1; k < MAX_DAYS; k++) {
    for(let i = 1; i <= N; i++) {
        dp[i][k] = dp[dp[i][k - 1]][k - 1]
    }
}

for(let i = 0; i < Q; i++) {
    let [X, Y] = input[i].split(" ").map(Number)
    let currentHole = X

    for(let j = MAX_DAYS - 1; j >= 0; j--) {
        if((Y >> j) & 1) {
            currentHole = dp[currentHole][j]
        }
    }
}
