function Main(input) {
    const K = parseInt(input.trim())
    let temp = 0
    for(let i = 1; i <= 10**6; i++) {
        temp = (temp * 10 + 7) % K
        if(temp === 0) {
            console.log(i)
            return i
        }
    }
    console.log(-1)
    return -1
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))