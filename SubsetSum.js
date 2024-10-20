const input = [
    "3 7",
    "2 2 3"
]

const [N, S] = input.shift().split(" ").map(i => Number(i))
const A = input.shift().split(" ").map(i => Number(i))

const dp = []

for(let i = 0; i < N - 1; i++) {
    for(let j = i + 1; j < N; j++) {
        dp.push(A[i] + A[j])
    }
}

let flg = false
console.log(dp)

for(let i = 0; i < N; i++) {
    if(dp[i] + A[i] === S) {
        flg = true
        break
    }
}

if(flg) {
    console.log("Yes")
}else{
    console.log("No")
}