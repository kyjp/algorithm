let input = [
    "7 10",
    "11 12 16 22 27 28 31"
]

const [N, K] = input.shift().split(" ").map(i => Number(i))
const A = input.shift().split(" ").map(i => Number(i))

console.log(N, K, A)

// 尺取り法を使う

// 自分で書いたコード
// let count = 0
// for(let i = 0; i < A.length; i++) {
//     for(let j = i + 1; j < A.length; j++) {
        
//         if(A[j] - A[i] <= K) {
//             count++
//         }else{
//             break
//         }
//     }
// }

// 添削
let count = 0
let j = 1
for(let i = 0; i < N; i++) {
    while(j < N && A[j] - A[i] <= K) {
        j++
    }
    count += (j - 1) - i
}

console.log(count)
