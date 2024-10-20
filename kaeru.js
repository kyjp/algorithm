const array = [30, 10, 60, 10, 60, 50]

let dp = []

for(let i = 0; i < N; i++) {
    if(i === 0) {
        dp[0] = 0
        continue
    }
    if(i === 1) {
        dp[1] = array[0] - array[1]
        continue
    }
    const a = array[i - 2] - array[i] + dp[i - 2]
    const b = array[i - 1] - array[i] + dp[i - 1]
    dp.push(Math.min(a, b))
}

console.log(dp)