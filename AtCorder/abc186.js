function Main(input) {
    input = input.split("\n")
    const N = input[0]
    const convertEight = (str) => {
      let num = Number(str)
      let s = ""
      while(0 < num) {
        s = String(num % 8) + s
        num = Math.floor(num / 8)
      }
      return s
    }
    const includeSeven = (str) => {
        return Array.from(str).some(i => i === "7")
    }
    let count = 0
    for(let i = 1; i <= N; i++) {
        if(!includeSeven(String(i)) && !includeSeven(convertEight(String(i)))) {
            count++
        }
    }
    console.log(count)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))