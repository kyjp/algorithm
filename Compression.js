const input = [
    "5",
    "46 80 11 77 46"
]

const N = Number(input.shift())
const A = input.shift().split(" ").map(item => Number(item))
const hash = Array.from(new Set(A)).sort((a, b) => a - b)
const arr = []

for(let i = 0; i < A.length; i++) {
    arr.push(hash.indexOf(A[i]) + 1)
}

console.log(arr)