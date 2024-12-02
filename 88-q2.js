const arr = [39, 41, 53, 55, 68, 72, 84, 88, 92, 97] 
const x = 68

const binarySearch = (arr, key) => {
    let left = 0
    let right = arr.length - 1
    while(left <= right) {
        const pos = Math.floor((left + right) / 2)
        if(arr[pos] === key) {
            return pos
        }
        if(arr[pos] < left) {
            right = pos - 1
            continue
        }
        left = pos + 1
    }
    return -1
}
console.log(binarySearch(arr, x))