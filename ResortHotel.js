const input = [
    7,
    [1, 2, 5, 5, 2, 3, 1],
    2,
    [3, 5],
    [4, 6]
]

let N = input.shift()
let A = input.shift()
let D = input.shift()

let tempArr = []

for(let d = 0; d < D; d++) {
    let max = 0
    for(let i = 0; i < input[d][0] - 1; i++) {
        if(max < A[i]) {
            max= A[i]
        }
    }
    for(let i = input[d][1] - 1; i < N; i++) {
        if(max < A[i]) {
            max= A[i]
        }
    }
    console.log(max)
}

