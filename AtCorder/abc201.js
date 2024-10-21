function Main(input) {
    input = input.split("\n")
    const N = Number(input.shift())
    let arr = input.map(i => i.split(" "))
    arr.sort((a, b) => Number(Number(b[1]) - a[1]))
    console.log(arr[1][0])
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))