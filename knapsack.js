const weights = [3, 3, 5, 1]
const values = [13, 17, 29, 10]
const capacity = 7

const dp = [...Array(weights.length + 1)].map(_ => [...Array(capacity + 1).fill(0)])

console.log(dp)

const knapsack = (capacity, weights, values) => {
  const n = weights.length
  for(let i = 0; i <= n; i++) {
  if(i === 0) continue
    for(let j = 0; j <= capacity; j++) {
      console.log(i, j, dp[i - 1][j], values[i - 1])
      if(j < weights[i - 1]) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i - 1]] + values[i - 1])
      }
    }
  }
}

knapsack(capacity, weights, values)
console.log(dp)