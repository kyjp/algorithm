const input = [
    '5',
    '2 4 1 3',
    '5 3 7'
]

const N = Number(input.shift())
const A = input.shift().split(" ").map(item => Number(item))
const B = input.shift().split(" ").map(item => Number(item))

const dp = []
dp[0] = 0
dp[1] = A[0]

for(let i = 2; i < N; i++) {
    dp[i] = Math.min(dp[i - 1] + A[i - 1], dp[i - 2] + B[i - 2])
}

console.log(dp)