const N = 4

const PA = [
    [4, 20],
    [3, 30],
    [2, 40],
    [1, 10]
]

const P = PA.map(i => i[0])
const A = PA.map(i => i[1])

const dp = [...Array(4)].map(_ => [...Array(4)])

dp[0][N - 1] = 0

for(let len = N - 2; 0 <= len; len--) {
    for (let l = 0; l < N - len; l++) {
        console.log('left', P[l], l)
        let r = N - len - 1
        console.log('right', P[r], r)
        let scoreL, scoreR = 0
        if(l <= P[l] && P[l] <= r) {
            scoreL = A[l]
        }
        if(l <= P[r] && P[r] <= r) {
            scoreR = A[r]
        }
    }
}