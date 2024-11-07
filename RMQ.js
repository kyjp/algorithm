const input = [
    "8 4",
    "1 3 16",
    "2 4 7",
    "1 5 13",
    "2 4 7"
]

const [N, Q] = input.shift().split(" ").map(i => Number(i))

const A = new Array(N).fill(0)

for(let i = 0; i < Q; i++) {
    let query = input[i].split(" ").map(i => Number(i))
    if(query[0] === 1) {
        A[[query[1]]] = query[2]
        continue
    }
    if(query[0] === 2) {
        let temp = A.slice(query[1], query[2] - 1)
        console.log(temp.reduce((a, b) => Math.max(a, b)))
        continue
    }
}