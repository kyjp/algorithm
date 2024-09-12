const N = 3
const K = 100

const P = [17, 57, 99]
const Q = [10, 36, 53]
let foundFlg = false

outerLoop: // ループ全体をラベルで定義
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (K === P[i] + Q[j]) {
      foundFlg = true
      break outerLoop
    }
  }
}

if (foundFlg) {
  console.log("Yes")
} else {
  console.log("No")
}

const N2 = 5
const X2 = 40

const A = [10, 20, 30, 40, 50]

let foundFlg2 = false

for(let i = 0; i < N2; i++) {
    if(X2 === A[i]) {
        foundFlg2 = true
        break
    }
}

if (foundFlg2) {
    console.log("Yes")
  } else {
    console.log("No")
  }
  