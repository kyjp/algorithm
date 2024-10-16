// function Main(input) {
//     input = input.split("\n")
//     let [N, K] = input.shift().split(" ").map(i => Number(i))
//     let index = 0
//     input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0])
//     let A = null
//     let B = null
//     while(0 < N) {
//         while(true) {
//             if(input.length === 0) break
//             let arr = input.shift().split(" ").map(i => Number(i))
//             A = arr[0]
//             B = arr[1]
//             N--
//             if(A < K) {
//                 K += B
//             }else{
//                 break
//             }
//         }
//         K - A
//         index += A
//     }
//     index += K
//     console.log(index)
// }

// Main(require("fs").readFileSync("/dev/stdin", "utf8"))