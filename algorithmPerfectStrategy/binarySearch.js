const input = [39, 41, 53, 55, 68, 72, 84, 88, 92, 97]

const binarySearch = (arr, target) => {
    if(arr.length === 0) return false
    let start = 0
    let end = arr.length - 1
    while(start < end) {
        let mid = Math.floor((start + end) / 2)
        if(arr[mid] === target) {
            return mid
        }
        if(arr[mid] < target) {
            start = mid + 1
            continue
        }
        if(target < arr[mid]) {
            end = mid - 1
            continue
        }
    }
    return false
}

console.log(binarySearch(input, 53))