function Main(input) {
    input = input.split("\n")
    let [N, K] = input.shift().split(" ").map(i => Number(i))
    let hash = []
    for(let i = 0; i < N; i++) {
        let item = input[i].split(" ").map(i => Number(i))
        hash.push([item[0], item[1]])
    }
    hash.sort((a, b) => a[0] - b[0])
    let currentMoney = K
    for(let i = 0; i < N; i++) {
        const [A, B] = hash[i]
        if(A <= currentMoney) {
            currentMoney = currentMoney + B
            continue
        }
        break
    }
    console.log(currentMoney)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))