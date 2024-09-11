const S = "mynavi"
const T = "monday"

let dp = [...Array(S.length + 1)].map(_ => [...Array(T.length + 1).fill(0)])

for(let i = 0; i <= S.length; i++) {
    if(i === 0) continue
    for (let j = 0; j <= T.length; j++) {
        if(dp[i - 1][j - 1]) {
            
        }
    }
}