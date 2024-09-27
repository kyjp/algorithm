const array = [62, 65, 41, 13, 20, 11, 18, 44, 53, 12, 18, 17, 14, 10, 39]
const newArray = []
for(let i = 0; i < array.length; i++) {
  if(i == 0) {
    newArray.push(array[i])
  }else{
    newArray.push(array[i] + newArray[i - 1])
  }
}
console.log(newArray)

console.log(newArray[12] - newArray[2])
console.log(newArray[9] - newArray[1])
console.log(newArray[14] - newArray[0])


// 一次元の累積和
const days = 8
const participants = 5
const participantsForSeveralDays = [
  [2, 3],
  [3, 6],
  [5, 7],
  [3, 7],
  [1, 5]
]

let dayArray = [...Array(days)].fill(0)

for(let i = 0; i < participantsForSeveralDays.length; i++) {
  dayArray[participantsForSeveralDays[i][0] - 1] += 1
  dayArray[participantsForSeveralDays[i][1]] -= 1
}

console.log(dayArray)

let number = 0

for(let i = 0; i < days; i++) {
  number += dayArray[i]
  console.log(number)
}

