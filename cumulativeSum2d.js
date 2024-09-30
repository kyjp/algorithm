const H = 5
const W = 5

const arrA = [
    [2, 0, 0, 5, 1],
    [1, 0, 3, 0, 0],
    [0, 8, 5, 0, 2],
    [4, 1, 0, 0, 6],
    [0, 9, 2, 7, 0],
]

const Q = 2

const arrB = [
    [2, 2, 4, 5],
    [1, 1, 5, 5]
]

const cumulativeSum2s = () => {
    const tables = [...Array(H)].map(i => [...Array(W)].fill(0))
    for(let i = 0; i < H; i++) {
        for(let j = 0; j < W; j++) {
            if(i === 0 &&  j === 0 || j === 0) {
                tables[i][j] = arrA[i][j]
                continue
            }
            tables[i][j] = arrA[i][j] + tables[i][j - 1]
        }
    }

    for(let i = 1; i < H; i++) {
        for(let j = 0; j < W; j++) {
            tables[i][j] = tables[i][j] + tables[i - 1][j]
        }
    }
    console.log(tables)
    for(let i = 0; i < Q; i++) {
        console.log(tables[i][i])
    }
}

cumulativeSum2s()