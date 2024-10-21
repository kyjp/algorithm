// function Main(input) {
//     input = input.split("\n")
//     const [N, M] = input.shift().split(" ").map(i => Number(i))
//     const A = input.shift().split(" ").map(i => Number(i))
//     let totalCost = 0
//     for(let i = 0; i < N; i++) {
//         let minPrice = A[i]
//         for(let j = 0; j <= M; j++) {
//             let discountedPrice = Math.floor(A[i] / Math.pow(2, j))
//             minPrice = Math.min(minPrice, discountedPrice)
//         }

//         totalCost += minPrice
//     }
//     console.log(totalCost)
//     return totalCost
// }

// Main(require("fs").readFileSync("/dev/stdin", "utf8"))