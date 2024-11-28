// 二分探索
// ソート済みの配列の中から目的のデータをみつける

const binarySearch = (arr, target) => {
    let left = 0
    let right = arr.length - 1
    let result = -1
    while(left <= right) {
        const pivot = Math.floor((left + right) / 2)
        if(arr[pivot] === target) {
            result = pivot
            break
        } else if(target < arr[pivot]) {
            right = pivot - 1
        } else  {
            left = pivot + 1
        }
    }
    return result
}

console.log(binarySearch([39, 41, 53, 55, 68, 72, 84, 88, 92, 97], 53))