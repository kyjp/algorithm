function Main(input) {
    input = input.split("\n")
    const [N, X] = input.shift().split(" ").map(i => Number(i))
    let A = input.shift().split(" ").map(i => Number(i))
    A = A.filter(i => i !== X)
    let str = ""
    A.forEach((i, index) => {
      if(index !== 0) str = str + " "
      str = str + String(i)
    })
    console.log(str)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))