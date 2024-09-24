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