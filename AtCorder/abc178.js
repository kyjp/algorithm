function Main(input) {
    input = input.split("\n")
    const S = Number(input[0])
    const mod = 10 ** 9 + 7
    const dp = new Array(S + 1).fill(0)
    dp[0] = 0
    dp[1] = 0
    dp[2] = 0
    dp[3] = 1
    dp[4] = 1
    dp[5] = 1
    for(let i = 6; i <= S; i++) {
        for(let j = 3; j <= i; j++) {
            dp[i] = (dp[i] + dp[i - j]) % mod
        }
    }
    console.log(dp[S])
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))