function Main(input) {
    input = input.split("\n")
    const [N, K] = input.shift().split(" ").map(i => Number(i))
    let a = N
    for(let i = 0; i < K; i++) {
        a = f(a)
    }
    console.log(a)
}

const g1 = (x) => {
    let temp = Array.from(x).map(i => Number(i)).sort((a, b) => a - b)
    return Number(temp)
}
const g2 = (x) => {
    let temp = Array.from(x).map(i => Number(i)).sort()
    return Number(temp)
}
const f = (x) => {
    g1(x) - g2(x)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))