const input = [
    "mynavi",
    "monday"
]

const [S, T] = input
let dp = [...Array(S.length + 1)].map(_ => [...Array(T.length + 1)].fill(0))

for(let i = 1; i <= S.length; i++) {
    for(let j = 1; j <= T.length; j++) {
        if(S[i - 1] === T[j - 1]) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + 1) 
        } else {

        }
    }
}
