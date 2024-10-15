// 半分全列挙
const input = [
    "3 50",
    "3 9 17",
    "4 7 9",
    "10 20 30",
    "1 2 3"
]

const [N, K] = input.shift().split(" ").map(i => Number(i))
const A = input.shift().split(" ").map(i => Number(i))
const B = input.shift().split(" ").map(i => Number(i))
const C = input.shift().split(" ").map(i => Number(i))
const D = input.shift().split(" ").map(i => Number(i))

let AB = []
let CD = []

for(let i = 0; i < A.length; i++) {
    for(let j = 0; j < B.length; j++) {
        AB.push(A[i] + B[j])
    }
}

for(let i = 0; i < C.length; i++) {
    for(let j = 0; j < D.length; j++) {
        CD.push(C[i] + D[j])
    }
}

let flg = false

CD = CD.sort((a, b) => a < b)

for(let i = 0; i < AB.length; i++) {
    const targetNum = K - AB[i]
    let left = 0
    let right = CD.length - 1

    while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        if(CD[mid] === targetNum) {
            flg = true
            break
        }
        if(CD[mid] < targetNum) {
            left = mid + 1
            continue
        }
        if(targetNum < CD[mid]) {
            right = mid - 1
            continue
        }
    }
    if(flg) {
        break
    }
}

console.log(flg ? "Yes" : "No")
