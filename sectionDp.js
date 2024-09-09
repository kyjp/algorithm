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

