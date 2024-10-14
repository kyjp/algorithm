const input = [
    [4, 10],
    [1, 2, 3, 4]
]

const [N, K] = input.shift()
const A = input.shift()

let start = 0
let end = 7
let mid
while(start < end) {
    mid = Math.floor((start + end) / 2)
    let sum = 0
    for(let i = 0; i < A.length; i++) {
        sum += Math.floor(mid / A[i])
    }
    if(K < sum) {
        end = mid
    }else{
        start = mid + 1
    }
}
console.log(mid)
