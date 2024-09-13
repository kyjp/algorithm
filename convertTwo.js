N = 1000

const convertTwo = (num) => {
  let temp = num
  let answer = ""
  for(let i = 9; 0 <= i; i--) {
    let w = 2
    if(num < w) {
      answer += "0"
      continue
    } 
    answer = String(temp % 2) + answer
    temp = Math.floor(temp / w)
    
  }
  return answer
}

console.log(convertTwo(N))