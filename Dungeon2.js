const input = [
    "5",
    "2 4 1 3",
    "5 3 7"
]

const N = Number(input.shift())
const A = input.shift().split(" ").map(i => Number(i))
const B = input.shift().split(" ").map(i => Number(i))

const dp = []
const result = []

for(let i = 0; i < N; i++) {
    if(i === 0) {
        dp.push(0)
        continue
    }
    if(i === 1) {
        dp.push(A[1 - 1])
        continue
    }
    const min = Math.min(A[i - 1] + dp[i - 1], B[i - 2] + dp[i - 2])
    dp.push(min)
}

let place = N
const arr = []
arr.push(place)

while(true) {
    if(place === 1) break
    console.log(dp[place - 2], A[place - 2])
    if(dp[place - 2] + A[place - 2] === dp[place - 1]) {
        place = place - 1
    }else{
        place = place - 2
    }
    arr.push(place)
}

arr.sort()

console.log(dp, arr)