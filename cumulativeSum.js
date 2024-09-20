const N = [62, 65, 41, 13, 20, 11, 18, 44, 53, 12, 18, 17, 14, 10, 39]

const LEN = N.length - 1

let totalNumberOfVisitors = []

const sumOfTotalNumberOfVisitors = (arr, l) => {
  return sumOfTotalNumberOfVisitorsHelper(arr, l)
}

let sumOfTotalNumberOfVisitorsHelper = (arr, index) => {
  if(index < 0) return 0
  let temp = arr[index] + sumOfTotalNumberOfVisitorsHelper(arr, index - 1)
  totalNumberOfVisitors.push(temp)
  return temp
}

sumOfTotalNumberOfVisitors(N, LEN)
console.log(totalNumberOfVisitors)

const sumOfTotalNumberOfVisitorsArea = (n, start, end) => {
  return n[end - 1] - n[start === 1 ? 0 : start - 2]
}

console.log(sumOfTotalNumberOfVisitorsArea(totalNumberOfVisitors, 4, 13))
console.log(sumOfTotalNumberOfVisitorsArea(totalNumberOfVisitors, 3, 10))
console.log(sumOfTotalNumberOfVisitorsArea(totalNumberOfVisitors, 2, 15))