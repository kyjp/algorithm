const input = [
    7,
    [1, 2, 5, 5, 2, 3, 1],
    2,
    [3, 5]
    [4, 6]
]

let N = input.shift()
let A = input.shift()
let D = input.shift()

let tempArr = []
let max = 0
   
for(let i = 0; i < input[D - 1][0]; i++) {
    if(max < A[i]) {
        max= A[i]
    }
}

for(let i = input[D - 1][1] + 1; i < N; i++) {
    if(max < A[i]) {
        max= A[i]
    }
}

console.log(max)