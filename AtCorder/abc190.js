function Main(input) {
    input = input.split("\n")
    const [N, S, D] = input.shift().split(" ").map(i => Number(i))
    let i = 0
    let result = false
    while(input.length != 0) {
        const [X, Y] = input.shift().split(" ").map(i => Number(i))
        if(X < S && D < Y) {
            result = true
            break
        }
    }
    console.log(result ? "Yes" : "No")
    return result ? "Yes" : "No"
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))