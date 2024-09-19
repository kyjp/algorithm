//ユークリッドの互除法
//最大公約数
const euclidean = (a, b) => {
  let temp = a % b
  if (temp === 0) {
    return b
  }else{
    return euclidean(b, temp)
  }
}

console.log(euclidean(648, 456))


//安定ソート
//同じ値が2つ以上あるときにソートしても同じ値の順番が変わらない（保存される）ソート

//不安定ソート
//同じ値が2つ以上あるときに順序が入れ替わってしまうことがある

//バブルソート
//隣り合っている数字を比較し、小さい順に入れ替えていく
//O(n^2)
//安定ソート
const bubble = () => {
  let array = [3, 8, 4, 7, 2, 1, 9, 0, 5, 6, 4]
  for(let i = 0; i < array.length; i++) { 
    for(let j = array.length - 1; i <= j ; j--) {
      if(array[j] < array[j - 1]) {
        let temp = array[j]
        array[j] = array[j - 1]
        array[j - 1] = temp
      }
    } 
  }
  console.log(array)
}

bubble()

//選択ソート
//線形探索で最小値を見つけ、その最小値を一番左の数字と入れ替えることを繰り返す
//O(n^2)
//不安定ソート
const select = () => {
  let array = [3, 8, 4, 7, 2, 1, 9, 0, 5, 6, 4]
  for(let i = 0; i < array.length; i++) {
    let min = i
    for(let j = i; j < array.length; j++) {
      if(array[j] < array[min]) {
        min = j
      }
    }
    let temp = array[i]
    array[i] = array[min]
    array[min] = temp
  }
  console.log(array)
}

//挿入ソート
//左側の値をソート済みにし、残りのソートしていない一番左の値とソート済みの値比べ、小さい順になるように、適切な場所に挿入していく
//O(n^2)
//安定ソート
const insert = () => {
  let array = [3, 8, 4, 7, 2, 1, 9, 0, 5, 6, 4]
  for(let i = 1; i < array.length; i++) {
    let temp = array[i]
    let j
    for(j = i - 1; 0 <= j; j--) {
      if(array[j] <= temp) {
        break
      }else{
        array[j + 1] = array[j]
      }
    }
    array[j + 1] = temp
  }
  return array
}
console.log(insert())

// マージソート
// 分割統治アルゴリズムで、配列を2つの部分に分割し、それぞれをソートしてから統合
// O(n log n)
let array = [3, 8, 4, 7, 2, 1, 9, 0, 5, 6, 4]

const mergeSort = (arr) => {
    const num = arr.length
    if(num === 1) return arr
    const mid = Math.floor(num / 2)
    const l = mergeSort(arr.slice(0, mid))
    const r = mergeSort(arr.slice(mid))
    return merge(l, r)
}

const merge = (left, right) => {
    let result = []
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right]
}

console.log(mergeSort(array))

// クイックソート
// O(n log n)
const quickSort = (startId, endId) => {
    let pivot = a[Math.floor((startId + endId) / 2)]
    let left = startId
    let right = endId
    while(true) {
        while(a[left] < pivot) {
            left++
        }
        while(pivot < a[right]) {
            right--
        }
        if(right <= left) {
            break
        }
        let temp = a[left]
        a[left] = a[right]
        a[right] = temp
        left++
        right++
    }
    if (startId < left - 1) {
        quickSort(startId, left - 1)
    }
    if (right + 1 < endId) {
        quickSort(right + 1, endId)
    }
}

let a = [3,7,2,4,6,1,9,8,5]
quickSort(0, a.length - 1)

// カエルの移動
const na = 5

const itemsA = [8, 6, 9, 2, 1]

const dpC = []

for(let i = 0; i < na; i++) {
    if(i === 0) {
        dpC[i] = 0
    } else if(i === 1) {
        dpC[i] = Math.abs(items[i] - items[i - 1])
    } else {
        dpC[i] = Math.min(Math.abs(items[i] - items[i - 1]) + dpC[i - 1], Math.abs(items[i] - items[i - 2]) + dpC[i - 2])
    }
}
console.log(dpC[dpC.length - 1])

// 階段の上り方
const ns = 6

const dpD = []

for (var i = 0; i < ns; i++) {
    if(i === 1) {
        dpD[0] = 1
    }
    if(i === 2) {
        dpD[1] = 2
    }
    dpD[i] = dpD[i - 2] + dpD[i - 1]
}

console.log(dpD[dpD.length - 1])

// 動的計画法
const arrayA = [8, 6, 9, 2, 1]

const N = 5

const min = (a, b) => {
    if(a < b) {
        return a
    }
    return b
}

let dp = []

for (var i = 0; i < N; i++) {
    if(i == 0) dp[i] = 0
    if(i == 1) dp[i] = Math.abs(arrayA[i - 1] - arrayA[i])
    if(i >= 2) {
        let o = dp[i - 1] + Math.abs(arrayA[i - 1] - arrayA[i])
        let t = dp[i - 2] + Math.abs(arrayA[i - 2] - arrayA[i])
        dp[i] = min(o, t)
    }
}

console.log(dp[dp.length - 1])

// フィボナッチ数列
const M = 6

let temp = 0
let dpA = []

for (var i = 0; i <= M; i++) {
    if(i === 0){
        dpA[0] = 1
    }else if(i === 1){
        dpA[1] = 2
    }else{
        dpA[i] = dpA[i - 1] + dpA[i - 2]
    }
}

console.log(dp[dp.length - 1])

// 再起でやると重くなる
const fib = (n) => {
    if(n < 2) return n
    return fib(n - 1) + fib(n - 2)
}


// ナップザック問題
const lines = [
    "4", 
    "10",
    "3 100",
    "6 210",
    "4 130",
    "2 57"
]
let dpB = []

const n = Number(lines[0])
const w = Number(lines[1])

let items = []

for (var i = 0; i < n; i++) {
    items.push(lines[i + 2].split(" ").map(i => i))
}

dpB = [...Array(n + 1)].map(() => Array(w + 1).fill(0))

for (var i = 1; i <= n; i++) {
    for (var j = 0; j <= w; j++) {
        if(j < Number(items[i - 1][0])) {
            dpB[i][j] = dpB[i - 1][j]
        }
        if(Number(items[i - 1][0]) <= j) {
            dpB[i][j] = Math.max(dpB[i - 1][j], dpB[i - 1][j - Number(items[i - 1][0])] + Number(items[i - 1][1]))
        }
    }
}

let answer = 0
for(var i = 0; i <= w; i++) {
    answer = Math.max(answer, dpB[n - 1][i])
}

console.log(dpB)
console.log(answer)

//FizzBuzz
const fizzbuzz = (n) => {
    if(n % 3 === 0 && n % 5 === 0 ) return "FizzBuzz"
    if(n % 3 === 0) return "Fizz"
    if(n % 5 === 0) return "Buzz"
    return n
}

for (var i = 1; i <= 100; i++) {
    console.log(fizzbuzz(i))
}

// 10進数を2進数に

let NA = 90
let num = NA
let two = ""
while(num !== 0) {
    two += String(num % 2)
    num = Math.floor(num / 2)
}
two = two.split("").reverse().join("")
console.log(num, two)

// ビット全探索

const NQ = 3
const S = 20
const [A1, A2, A3] = [5, 8, 9]
let flg = false
for(let i = 0; i < (1 << NQ); i++){
    let temp = i.toString(2).padStart(NQ, '0').split("")
    let total = 0
    if(temp[0] === "1") {
        total += A1
    }
    if(temp[1] === "1") {
        total += A2
    }
    if(temp[2] === "1") {
        total += A3
    }
    if(S === total) {
        flg = true
        break
    }
}
if(flg) {
    console.log("Ok")
}else {
    console.log("No")
}


// 二分探索
const [N, X] = [15, 47]
const array = [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67]

let left = 0
let right = array.length - 1

let mid

while(left <= right) {
    mid = Math.floor((left + right) / 2)
    if(array[mid] === X) {
        console.log(mid + 1)
        break
    }else if(X < array[mid]) {
        right = mid - 1
    }else if(array[mid] < X) {
        left = mid + 1
    }else{
        break
    }
}

// 半分全列挙
const N = 3
const K = 50

const lines = [
    [3, 9, 17],
    [4, 7, 9],
    [10, 20, 30],
    [1, 2, 3]
]

let P = []
let Q = []

for (var i = 0; i < N; i++) {
    for (var j = 0; j < N; j++) {
        P.push(lines[0][i] + lines[1][j])
        Q.push(lines[2][i] + lines[3][j])
    }
}

let flg = false

for (var i = 0; i < P.length; i++) {
    for (var j = 0; j < Q.length; j++) {
        if(P[i] + Q[j] === K) {
            flg = true
            break
        }
    }
}

if(flg) {
    console.log("Yes")
}else{
    console.log("No")
}

// DP
let S = "tokyo"
let T = "kyoto"

let dp = [...Array(S.length + 1)]

dp = dp.map(i => {
  return i = [...Array(T.length + 1).fill(0)]
})

S = Array.from(S)
T = Array.from(T)

console.log(S, T)

for(let i=0; i<=S.length; i++) {
  for(let j=0; j<=T.length; j++) {
    if(i === 0 || j === 0) {
      if(1 <= i) {
        dp[i][j] = dp[i - 1][j]
      }
      if(1 <= j) {
        dp[i][j] = dp[i][j - 1]
      }
    } else {
      if(S[i - 1] == T[j - 1]) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1] + 1)
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
}

console.log('test', dp)

const N = 3000
const K = 4000

let count = 0

for(let i = 1; i <= N; i++) {
  for(let j = 1; j <= N; j++) {
    if(i + j < K && K - i - j <= N) {
      count++
    }
  }
}

console.log(count)