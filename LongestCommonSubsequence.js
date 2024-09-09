const S = "monday"
const T = "mynavi"

let dp = [...Array(S.length)].map(_ => [...Array(T.length)].fill(0))

let SArray = Array.from (S)
let TArray = Array.from(T)
for(let i = 0; i < SArray.length; i++) {
  let textA = SArray[i]
  for(let j = 0; j < TArray.length; j++) {
    let textT = TArray[j]
    if(textA !== textT) {
      if(i === 0 && j === 0 || j === 0) {
        continue
      }else if(i === 0) {
        dp[i][j] = dp[i][j - 1]
        continue
      }else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
        continue
      }
    }
   
    if(i === 0 && j === 0) {
      dp[0][0] = 1
      continue
    }else if(j === 0) {
      dp[i][0] = 1
      continue
    }else if(i === 0) {
      dp[0][j] = 1
    }else {
      dp[i][j] = Math.max(dp[i - 1][j] + 1, dp[i][j - 1])     }
  }
}
console.log(dp)