const input = [
    "3 7",
    "2 2 3"
]

const [N, S] = input.shift().split(" ").map(i => Number(i))
const A = input.shift().split(" ").map(i => Number(i))

A.unshift(0)

const dp = [...Array(N + 1)].map(() => Array(S + 1).fill("×"))


dp[0][0] = "○"
for(let i = 1; i <= N; i++) {
    for(let j = 0; j <= S; j++) {
        if(dp[i - 1][j] === "○") {
            dp[i][j] = "○"
            continue
        }
        if(j - A[i] >= 0 &&  dp[i - 1][j - A[i]] === "○") {
            dp[i][j] = "○"
            continue
        }
    }
}


console.log(dp)

if(dp[N][S] === "○") {
    console.log("Yes")

    // 復元
    let N2 = N
    let S2 = S
    const result = []
    while(true) {
        if(N2 === 0 || S2 < 0) break
        if(A[N2] <= S2 && dp[N2 - 1][S2 - A[N2]] === "○" && dp[N2][S2] === "○") {
            result.push(A[N2])
            S2 -= A[N2]
        }
        N2--
    }
    console.log(result)
}else{
    console.log("No")
}