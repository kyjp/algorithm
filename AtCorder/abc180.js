function Main(input) {
    input = input.split("\n")
    const N = Number(input[0])
    let answer = ""
    for(let i = 1; i <= N; i++) {
        if(N % i === 0) {
            if(answer === "") {
                answer = String(i)
            }else{
                answer = `${answer}\n${String(i)}`
            }
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))